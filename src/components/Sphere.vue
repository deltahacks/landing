
<template>
  <div id="canvas">
    <button @click="sphere">Load Sphere</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Sphere',
  methods: {
    sphere() {
      THREE.TrackballControls = function(object, domElement) {
        const pThis = this;
        let STATE = {
          NONE: -1,
          ROTATE: 0,
          ZOOM: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_ZOOM_PAN: 4,
        };

        this.object = object;
        this.domElement = domElement !== undefined ? domElement : document;

        // API

        this.enabled = true;

        this.screen = { left: 0, top: 0, width: 0, height: 0 };

        this.rotateSpeed = 1.0;
        this.zoomSpeed = 1.2;
        this.panSpeed = 0.3;

        this.noRotate = false;
        this.noZoom = false;
        this.noPan = false;

        this.staticMoving = false;
        this.dynamicDampingFactor = 0.2;

        this.minDistance = 0;
        this.maxDistance = Infinity;

        this.keys = [65 /*A*/, 83 /*S*/, 68 /*D*/];

        // internals

        this.target = new THREE.Vector3();

        const EPS = 0.000001;

        const lastPosition = new THREE.Vector3();

        let pState = STATE.NONE,
          pPrevState = STATE.NONE,
          pEye = new THREE.Vector3(),
          pMovePrev = new THREE.Vector2(),
          pMoveCurr = new THREE.Vector2(),
          pLastAxis = new THREE.Vector3(),
          pLastAngle = 0,
          pZoomStart = new THREE.Vector2(),
          pZoomEnd = new THREE.Vector2(),
          pTouchZoomDistanceStart = 0,
          pTouchZoomDistanceEnd = 0,
          pPanStart = new THREE.Vector2(),
          pPanEnd = new THREE.Vector2();

        // for reset

        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.up0 = this.object.up.clone();

        // events

        const changeEvent = { type: 'change' };
        const startEvent = { type: 'start' };
        const endEvent = { type: 'end' };

        // methods

        this.handleResize = function() {
          if (this.domElement === document) {
            this.screen.left = 0;
            this.screen.top = 0;
            this.screen.width = window.innerWidth;
            this.screen.height = window.innerHeight;
          } else {
            const box = this.domElement.getBoundingClientRect();
            // adjustments come from similar code in the jquery offset() function
            const d = this.domElement.ownerDocument.documentElement;
            this.screen.left = box.left + window.pageXOffset - d.clientLeft;
            this.screen.top = box.top + window.pageYOffset - d.clientTop;
            this.screen.width = box.width;
            this.screen.height = box.height;
          }
        };

        this.handleEvent = function(event) {
          if (typeof this[event.type] === 'function') {
            this[event.type](event);
          }
        };

        const getMouseOnScreen = (function() {
          const vector = new THREE.Vector2();

          return function(pageX, pageY) {
            vector.set(
              (pageX - pThis.screen.left) / pThis.screen.width,
              (pageY - pThis.screen.top) / pThis.screen.height);

            return vector;
          };
        })();

        const getMouseOnCircle = (function() {
          const vector = new THREE.Vector2();

          return function(pageX, pageY) {
            vector.set(
              (pageX - pThis.screen.width * 0.5 - pThis.screen.left) / (pThis.screen.width * 0.5),
              ((pThis.screen.height + 2 * (pThis.screen.top - pageY)) / pThis.screen.width) // screen.width intentional
            );

            return vector;
          };
        })();

        this.rotateCamera = (function() {
          let axis = new THREE.Vector3(),
            quaternion = new THREE.Quaternion(),
            eyeDirection = new THREE.Vector3(),
            objectUpDirection = new THREE.Vector3(),
            objectSidewaysDirection = new THREE.Vector3(),
            moveDirection = new THREE.Vector3(),
            angle;

          return function() {
            moveDirection.set(
              pMoveCurr.x - pMovePrev.x,
              pMoveCurr.y - pMovePrev.y,
              0);
            angle = moveDirection.length();

            if (angle) {
              pEye.copy(pThis.object.position).sub(pThis.target);

              eyeDirection.copy(pEye).normalize();
              objectUpDirection.copy(pThis.object.up).normalize();
              objectSidewaysDirection
                .crossVectors(objectUpDirection, eyeDirection)
                .normalize();

              objectUpDirection.setLength(pMoveCurr.y - pMovePrev.y);
              objectSidewaysDirection.setLength(pMoveCurr.x - pMovePrev.x);

              moveDirection.copy(
                objectUpDirection.add(objectSidewaysDirection));

              axis.crossVectors(moveDirection, pEye).normalize();

              angle *= pThis.rotateSpeed;
              quaternion.setFromAxisAngle(axis, angle);

              pEye.applyQuaternion(quaternion);
              pThis.object.up.applyQuaternion(quaternion);

              pLastAxis.copy(axis);
              pLastAngle = angle;
            } else if (!pThis.staticMoving && pLastAngle) {
              pLastAngle *= Math.sqrt(1.0 - pThis.dynamicDampingFactor);
              pEye.copy(pThis.object.position).sub(pThis.target);
              quaternion.setFromAxisAngle(pLastAxis, pLastAngle);
              pEye.applyQuaternion(quaternion);
              pThis.object.up.applyQuaternion(quaternion);
            }

            pMovePrev.copy(pMoveCurr);
          };
        })();

        this.zoomCamera = function() {
          let factor;

          if (pState === STATE.TOUCH_ZOOM_PAN) {
            factor = pTouchZoomDistanceStart / pTouchZoomDistanceEnd;
            pTouchZoomDistanceStart = pTouchZoomDistanceEnd;
            pEye.multiplyScalar(factor);
          } else {
            factor = 1.0 + (pZoomEnd.y - pZoomStart.y) * pThis.zoomSpeed;

            if (factor !== 1.0 && factor > 0.0) {
              pEye.multiplyScalar(factor);

              if (pThis.staticMoving) {
                pZoomStart.copy(pZoomEnd);
              } else {
                pZoomStart.y +=
                  (pZoomEnd.y - pZoomStart.y) * this.dynamicDampingFactor;
              }
            }
          }
        };

        this.panCamera = (function() {
          const mouseChange = new THREE.Vector2(),
            objectUp = new THREE.Vector3(),
            pan = new THREE.Vector3();

          return function() {
            mouseChange.copy(pPanEnd).sub(pPanStart);

            if (mouseChange.lengthSq()) {
              mouseChange.multiplyScalar(pEye.length() * pThis.panSpeed);

              pan
                .copy(pEye)
                .cross(pThis.object.up)
                .setLength(mouseChange.x);
              pan.add(objectUp.copy(pThis.object.up).setLength(mouseChange.y));

              pThis.object.position.add(pan);
              pThis.target.add(pan);

              if (pThis.staticMoving) {
                pPanStart.copy(pPanEnd);
              } else {
                pPanStart.add(
                  mouseChange
                    .subVectors(pPanEnd, pPanStart)
                    .multiplyScalar(pThis.dynamicDampingFactor)); }
            }
          };
        })();

        this.checkDistances = function() {
          if (!pThis.noZoom || !pThis.noPan) {
            if (pEye.lengthSq() > pThis.maxDistance * pThis.maxDistance) {
              pThis.object.position.addVectors(
                pThis.target,
                pEye.setLength(pThis.maxDistance)); }

            if (pEye.lengthSq() < pThis.minDistance * pThis.minDistance) {
              pThis.object.position.addVectors(
                pThis.target,
                pEye.setLength(pThis.minDistance),
              );
            }
          }
        };

        this.update = function() {
          pEye.subVectors(pThis.object.position, pThis.target);

          if (!pThis.noRotate) {
            pThis.rotateCamera();
          }

          if (!pThis.noZoom) {
            pThis.zoomCamera();
          }

          if (!pThis.noPan) {
            pThis.panCamera();
          }

          pThis.object.position.addVectors(pThis.target, pEye);

          pThis.checkDistances();

          pThis.object.lookAt(pThis.target);

          if (lastPosition.distanceToSquared(pThis.object.position) > EPS) {
            pThis.dispatchEvent(changeEvent);

            lastPosition.copy(pThis.object.position);
          }
        };

        this.reset = function() {
          pState = STATE.NONE;
          pPrevState = STATE.NONE;

          pThis.target.copy(pThis.target0);
          pThis.object.position.copy(pThis.position0);
          pThis.object.up.copy(pThis.up0);

          pEye.subVectors(pThis.object.position, pThis.target);

          pThis.object.lookAt(pThis.target);

          pThis.dispatchEvent(changeEvent);

          lastPosition.copy(pThis.object.position);
        };

        // listeners

        function keydown(event) {
          if (pThis.enabled === false) {
            return;
          }

          window.removeEventListener('keydown', keydown);

          pPrevState = pState;

          if (pState !== STATE.NONE) {
            return;
          } else if (
            event.keyCode === pThis.keys[STATE.ROTATE] &&
            !pThis.noRotate
          ) {
            pState = STATE.ROTATE;
          } else if (
            event.keyCode === pThis.keys[STATE.ZOOM] &&
            !pThis.noZoom
          ) {
            pState = STATE.ZOOM;
          } else if (event.keyCode === pThis.keys[STATE.PAN] && !pThis.noPan) {
            pState = STATE.PAN;
          }
        }

        function keyup(event) {
          if (pThis.enabled === false) {
            return;
          }

          pState = pPrevState;

          window.addEventListener('keydown', keydown, false);
        }

        function mousedown(event) {
          if (pThis.enabled === false) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (pState === STATE.NONE) {
            pState = event.button;
          }

          if (pState === STATE.ROTATE && !pThis.noRotate) {
            pMoveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
            pMovePrev.copy(pMoveCurr);
          } else if (pState === STATE.ZOOM && !pThis.noZoom) {
            pZoomStart.copy(getMouseOnScreen(event.pageX, event.pageY));
            pZoomEnd.copy(pZoomStart);
          } else if (pState === STATE.PAN && !pThis.noPan) {
            pPanStart.copy(getMouseOnScreen(event.pageX, event.pageY));
            pPanEnd.copy(pPanStart);
          }

          document.addEventListener('mousemove', mousemove, false);
          document.addEventListener('mouseup', mouseup, false);

          pThis.dispatchEvent(startEvent);
        }

        function mousemove(event) {
          if (pThis.enabled === false) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (pState === STATE.ROTATE && !pThis.noRotate) {
            pMovePrev.copy(pMoveCurr);
            pMoveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
          } else if (pState === STATE.ZOOM && !pThis.noZoom) {
            pZoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
          } else if (pState === STATE.PAN && !pThis.noPan) {
            pPanEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
          }
        }

        function mouseup(event) {
          if (pThis.enabled === false) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          pState = STATE.NONE;

          document.removeEventListener('mousemove', mousemove);
          document.removeEventListener('mouseup', mouseup);
          pThis.dispatchEvent(endEvent);
        }

        function mousewheel(event) {
          if (pThis.enabled === false) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          let delta = 0;

          if (event.wheelDelta) {
            // WebKit / Opera / Explorer 9

            delta = event.wheelDelta / 40;
          } else if (event.detail) {
            // Firefox

            delta = -event.detail / 3;
          }

          pZoomStart.y += delta * 0.01;
          pThis.dispatchEvent(startEvent);
          pThis.dispatchEvent(endEvent);
        }

        function touchstart(event) {
          if (pThis.enabled === false) {
            return;
          }

          switch (event.touches.length) {
            case 1:
              pState = STATE.TOUCH_ROTATE;
              pMoveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
              pMovePrev.copy(pMoveCurr);
              break;

            case 2:
              pState = STATE.TOUCH_ZOOM_PAN;
              const dx = event.touches[0].pageX - event.touches[1].pageX;
              const dy = event.touches[0].pageY - event.touches[1].pageY;
              pTouchZoomDistanceEnd = pTouchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);
              const x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
              const y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
              pPanStart.copy(getMouseOnScreen(x, y));
              pPanEnd.copy(pPanStart);
              break;

            default:
              pState = STATE.NONE;
          }
          pThis.dispatchEvent(startEvent);
        }

        function touchmove(event) {
          if (pThis.enabled === false) {return; }

          event.preventDefault();
          event.stopPropagation();

          switch (event.touches.length) {
            case 1:
              pMovePrev.copy(pMoveCurr);
              pMoveCurr.copy(
                getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
              break;

            case 2:
              const dx = event.touches[0].pageX - event.touches[1].pageX;
              const dy = event.touches[0].pageY - event.touches[1].pageY;
              pTouchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);

              const x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
              const y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
              pPanEnd.copy(getMouseOnScreen(x, y));
              break;

            default:
              pState = STATE.NONE;
          }
        }

        function touchend(event) {
          if (pThis.enabled === false) {return; }

          switch (event.touches.length) {
            case 1:
              pMovePrev.copy(pMoveCurr);
              pMoveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
              break;

            case 2:
              pTouchZoomDistanceStart = pTouchZoomDistanceEnd = 0;

              const x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
              const y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
              pPanEnd.copy(getMouseOnScreen(x, y));
              pPanStart.copy(pPanEnd);
              break;
          }

          pState = STATE.NONE;
          pThis.dispatchEvent(endEvent);
        }

        this.domElement.addEventListener(
          'contextmenu',
          function(event) {
            event.preventDefault();
          },
          false);

        this.domElement.addEventListener('mousedown', mousedown, false);

        this.domElement.addEventListener('mousewheel', mousewheel, false);
        this.domElement.addEventListener('DOMMouseScroll', mousewheel, false); // firefox

        this.domElement.addEventListener('touchstart', touchstart, false);
        this.domElement.addEventListener('touchend', touchend, false);
        this.domElement.addEventListener('touchmove', touchmove, false);

        window.addEventListener('keydown', keydown, false);
        window.addEventListener('keyup', keyup, false);

        this.handleResize();

        // force an update at start
        this.update();
      };

      THREE.TrackballControls.prototype = Object.create(
        THREE.EventDispatcher.prototype);
      THREE.TrackballControls.prototype.constructor = THREE.TrackballControls;

      (function e(t, n, r) {
        function s(o, u) {
          if (!n[o]) {
            if (!t[o]) {
              const a = typeof require === 'function' && require;
              if (!u && a) {return a(o, !0); }
              if (i) {return i(o, !0); }
              const f = new Error("Cannot find module '" + o + "'");
              throw ((f.code = 'MODULE_NOT_FOUND'), f);
            }
            const l = (n[o] = { exports: {} });
            t[o][0].call(
              l.exports,
              function(e) {
                const n = t[o][1][e];
                return s(n ? n : e);
              },
              l,
              l.exports,
              e,
              t,
              n,
              r,
            );
          }
          return n[o].exports;
        }
        const i = typeof require === 'function' && require;
        for (let o = 0; o < r.length; o++) {s(r[o]); }
        return s;
      })(
        {
          1: [
            function(require, module, exports) {
              const Get = require('./get');
              const get = new Get();
              const debounce = require('./debounce');
              const Camera = require('./camera');
              const PointLight = require('./pointLight');
              const HemiLight = require('./hemiLight');
              const Mesh = require('./mesh');

              // let bodyWidth = document.body.clientWidth;
              // let bodyHeight = document.body.clientHeight;
              let bodyWidth = 250;
              let bodyHeight = 300;
              let fps = 60;
              let frameTime;
              let lastTimeRender = +new Date();

              let canvas;
              let renderer;
              let scene;
              let camera;
              let light;
              let globe;
              let ball;

              const initThree = function() {
                canvas = document.getElementById('canvas');
                renderer = new THREE.WebGLRenderer({
                  antialias: true,
                });
                if (!renderer) {
                  alert('Three.jsの初期化に失敗しました。');
                }
                renderer.setSize(bodyWidth, bodyHeight);
                canvas.appendChild(renderer.domElement);
                renderer.setClearColor(0xeeeeee, 1.0);

                scene = new THREE.Scene();
              };

              const init = function() {
                const ballGeometry = new THREE.SphereGeometry(360, 20, 20);
                const ballMaterial = new THREE.MeshLambertMaterial({
                  color: 0xffffff,
                  shading: THREE.FlatShading,
                });

                initThree();

                camera = new Camera();
                camera.init(
                  get.radian(45),
                  get.radian(0),
                  bodyWidth,
                  bodyHeight);

                light = new HemiLight();
                light.init(
                  scene,
                  get.radian(0),
                  get.radian(120),
                  1000,
                  0x66ff99,
                  0x3366aa,
                  1);

                ball = new Mesh();
                ball.init(scene, ballGeometry, ballMaterial);

                renderloop();
                debounce(window, 'resize', function(event) {
                  resizeRenderer();
                });
              };

              const render = function() {
                renderer.clear();

                ball.updateVertices();

                renderer.render(scene, camera.obj);
              };

              const renderloop = function() {
                const now = +new Date();
                requestAnimationFrame(renderloop);

                if (now - lastTimeRender > 1000 / fps) {
                  render();
                  lastTimeRender = +new Date();
                }
                camera.trackball.update();
              };

              const resizeRenderer = function() {
                bodyWidth = document.body.clientWidth;
                bodyHeight = document.body.clientHeight;
                renderer.setSize(bodyWidth, bodyHeight);
                camera.init(
                  get.radian(45),
                  get.radian(0),
                  bodyWidth,
                  bodyHeight);
              };

              init();
            },
            {
              './camera': 2,
              './debounce': 3,
              './get': 4,
              './hemiLight': 5,
              './mesh': 6,
              './pointLight': 7,
            },
          ],
          2: [
            function(require, module, exports) {
              const Get = require('./get');
              const get = new Get();

              exports = function() {
                let Camera = function() {
                  this.width = 0;
                  this.height = 0;
                  this.rad1 = 0;
                  this.rad2 = 0;
                  this.x = 0;
                  this.y = 0;
                  this.z = 0;
                  this.r = 0;
                  this.obj;
                  this.trackball;
                };

                Camera.prototype.init = function(rad1, rad2, width, height) {
                  this.width = width;
                  this.height = height;
                  this.r = 1200;
                  this.rad1 = rad1;
                  this.rad2 = rad2;
                  this.obj = new THREE.PerspectiveCamera(
                    50,
                    this.width / this.height,
                    1,
                    10000);
                  this.setPosition(this.rad1, this.rad2, this.r);
                  this.initTrackBall();
                };

                Camera.prototype.setPosition = function(rad1, rad2) {
                  const points = get.pointSphere(rad1, rad2, this.r);
                  this.obj.position.set(points[0], points[1], points[2]);
                  this.obj.up.set(0, 1, 0);
                  this.obj.lookAt({
                    x: 0,
                    y: 0,
                    z: 0,
                  });
                };

                Camera.prototype.initTrackBall = function() {
                  this.trackball = new THREE.TrackballControls(
                    this.obj,
                    this.canvas);
                  this.trackball.screen.width = this.width;
                  this.trackball.screen.height = this.height;
                  this.trackball.noRotate = false;
                  this.trackball.rotateSpeed = 3;
                  this.trackball.noZoom = true;
                  this.trackball.zoomSpeed = 1;
                  this.trackball.noPan = false;
                  this.trackball.maxDistance = 3000;
                  this.trackball.minDistance = 500;
                };

                return Camera;
              };

              module.exports = exports();
            },
            { './get': 4 },
          ],
          3: [
            function(require, module, exports) {
              module.exports = function(object, eventType, callback) {
                let timer;

                object.addEventListener(
                  eventType,
                  function(event) {
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                      callback(event);
                    }, 500);
                  },
                  false);
              };
            },
            {},
          ],
          4: [
            function(require, module, exports) {
              exports = function() {
                const Get = function() {};

                Get.prototype.randomInt = function(min, max) {
                  return Math.floor(Math.random() * (max - min)) + min;
                };

                Get.prototype.degree = function(radian) {
                  return (radian / Math.PI) * 180;
                };

                Get.prototype.radian = function(degrees) {
                  return (degrees * Math.PI) / 180;
                };

                Get.prototype.pointSphere = function(rad1, rad2, r) {
                  const x = Math.cos(rad1) * Math.cos(rad2) * r;
                  const z = Math.cos(rad1) * Math.sin(rad2) * r;
                  const y = Math.sin(rad1) * r;
                  return [x, y, z];
                };

                return Get;
              };

              module.exports = exports();
            },
            {},
          ],
          5: [
            function(require, module, exports) {
              const Get = require('./get');
              const get = new Get();

              exports = function() {
                let HemiLight = function() {
                  this.rad1 = 0;
                  this.rad2 = 0;
                  this.x = 0;
                  this.y = 0;
                  this.z = 0;
                  this.r = 0;
                  this.obj;
                };

                HemiLight.prototype.init = function(
                  scene,
                  rad1,
                  rad2,
                  r,
                  hex1,
                  hex2,
                  intensity,
                ) {
                  this.r = r;
                  this.obj = new THREE.HemisphereLight(hex1, hex2, intensity);
                  this.setPosition(rad1, rad2);
                  scene.add(this.obj);
                };

                HemiLight.prototype.setPosition = function(rad1, rad2) {
                  const points = get.pointSphere(rad1, rad2, this.r);
                  this.obj.position.set(points[0], points[1], points[2]);
                };

                return HemiLight;
              };

              module.exports = exports();
            },
            { './get': 4 },
          ],
          6: [
            function(require, module, exports) {
              const Get = require('./get');
              const get = new Get();

              exports = function() {
                const Mesh = function() {
                  this.r = 0;
                  this.x = 0;
                  this.y = 0;
                  this.z = 0;
                  this.geometry;
                  this.material;
                  this.mesh;
                  this.vertexArr = [];
                  this.vertexDeg = [];
                  this.vertexWaveCoe = 0;
                };

                Mesh.prototype.init = function(scene, geometry, material) {
                  this.geometry = geometry;
                  this.material = material;
                  this.mesh = new THREE.Mesh(this.geometry, this.material);
                  this.r = this.geometry.parameters.radius;
                  this.vertexWaveCoe = this.r / 30;

                  this.geometry.mergeVertices();
                  this.updateVerticesInt();
                  this.setPosition();
                  this.mesh.rotation.set(get.radian(45), 0, 0);

                  scene.add(this.mesh);
                };

                Mesh.prototype.setPosition = function() {
                  this.mesh.position.set(this.x, this.y, this.z);
                };

                Mesh.prototype.updateVerticesInt = function() {
                  const vertices = this.mesh.geometry.vertices;
                  for (let i = 0; i < vertices.length; i++) {
                    const r = this.r;
                    this.vertexArr[i] = r;
                    this.vertexDeg[i] = get.randomInt(0, 360);
                    vertices[i].normalize().multiplyScalar(r);
                  }
                  this.mesh.geometry.computeVertexNormals();
                  this.mesh.geometry.computeFaceNormals();
                  this.mesh.geometry.verticesNeedUpdate = true;
                  this.mesh.geometry.elementsNeedUpdate = true;
                  this.mesh.geometry.normalsNeedUpdate = true;
                };

                Mesh.prototype.updateVertices = function() {
                  const vertices = this.mesh.geometry.vertices;
                  for (let i = 0; i < this.vertexArr.length; i++) {
                    let r;
                    this.vertexDeg[i] += 8;
                    r =
                      this.vertexArr[i] +
                      Math.sin(get.radian(this.vertexDeg[i])) *
                        this.vertexWaveCoe;
                    vertices[i].normalize().multiplyScalar(r);
                  }
                  this.mesh.geometry.computeVertexNormals();
                  this.mesh.geometry.computeFaceNormals();
                  this.mesh.geometry.verticesNeedUpdate = true;
                  this.mesh.geometry.elementsNeedUpdate = true;
                  this.mesh.geometry.normalsNeedUpdate = true;
                };

                return Mesh;
              };

              module.exports = exports();
            },
            { './get': 4 },
          ],
          7: [
            function(require, module, exports) {
              const Get = require('./get');
              const get = new Get();

              exports = function() {
                const PointLight = function() {
                  this.rad1 = 0;
                  this.rad2 = 0;
                  this.x = 0;
                  this.y = 0;
                  this.z = 0;
                  this.r = 0;
                  this.obj;
                };

                PointLight.prototype.init = function(
                  scene,
                  rad1,
                  rad2,
                  r,
                  hex,
                  intensity,
                  distance,
                ) {
                  this.r = r;
                  this.obj = new THREE.PointLight(hex, intensity, distance);
                  this.setPosition(rad1, rad2);
                  scene.add(this.obj);
                };

                PointLight.prototype.setPosition = function(rad1, rad2) {
                  const points = get.pointSphere(rad1, rad2, this.r);
                  this.obj.position.set(points[0], points[1], points[2]);
                };

                return PointLight;
              };

              module.exports = exports();
            },
            { './get': 4 },
          ],
        },
        {},
        [1],
      );
    },
  },
});
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.canvas {
  position: absolute;
}
</style>

