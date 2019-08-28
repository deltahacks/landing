<template>
  <footer class="footer-distributed">
    <div class="left-footer">
      <img
        src="../assets/logolarge.png"
        alt
        style="float: left; width: 15%; padding: 30px 30px;"
      />
      <p class="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
      </p>
       <p class="footer-company-name">Deltahacks &copy; 2019</p>
    </div>
    <!-- <div class="center-footer">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>1280 Main St W</span> Hamilton, ON</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+1 555 123456</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:hello@deltahacks.com">hello@deltahacks.com</a></p>
      </div>
    </div> -->
    <div class="right-footer">
      <h3>
        Made with <span style="color: #e25555;">&#9829;&#128171;</span> in Hamilton
      </h3>
      <div class="footer-icons">
        <a href="https://www.facebook.com/thedeltahacks/"
          ><i class="fa fa-facebook"></i
        ></a>
        <a href="https://twitter.com/DeltaHacks"
          ><i class="fa fa-twitter"></i
        ></a>
        <a href="https://www.instagram.com/deltahacks"
          ><i class="fa fa-instagram"></i
        ></a>
        <a href="https://www.snapchat.com/add/deltahacks"
          ><i class="fa fa-snapchat"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped>
.footer-distributed {
  background: url('~@/assets/footer2.svg') center center;
  background-size: cover;
  height: 400px;
  margin-top: 80px;
  position: relative;
  font: bold 16px sans-serif;
}

.footer-distributed .right-footer, 
.footer-distributed .left-footer, 
.footer-distributed .center-footer {
  bottom: 0;
  height: 180px;
  width: 37%;
  display: inline-block;
  position: absolute;
  padding-top: 30px;
}

.footer-distributed .right-footer {
  right: 0%;
  text-align: right;
  padding-right: 30px;
}

.footer-distributed .left-footer {
  left: 0%;
  text-align: left;
}

.footer-distributed .center-footer {
  left: 10%;
  bottom: 0;
  text-align: bottom;
}
.footer-distributed .right-footer h3 {
  padding-top: 30px;
}

.footer-distributed .center-footer i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  margin: 10px 15px;
  /* vertical-align: middle; */
}
.footer-distributed .footer-distributed .center-footer i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}
.footer-distributed .center-footer p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}
.footer-distributed .center-footer p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
.footer-distributed .center-footer p a {
  color: #5383d3;
  text-decoration: none;
}


.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: bottom;
}
/* Footer left */
.footer-distributed .footer-left {
  width: 40%;
}
/* The company logo */
.footer-distributed h3 {
  color: #ffffff;
  margin: 0;
}
.footer-distributed h3 span {
  color: #5383d3;
}
/* Footer links */
.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}
.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}
.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}
/* Footer Center */
.footer-distributed .footer-center {
  width: 35%;
}
.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}
.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}
.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}
.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}
.footer-distributed .footer-center p a {
  color: #5383d3;
  text-decoration: none;
}
/* Footer Right */
.footer-distributed .footer-right {
  width: 20%;
}
.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}
.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}
.footer-distributed .footer-icons {
  margin-top: 25px;
}
.footer-distributed .footer-icons a {
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 25px;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  margin-right: 3px;
  margin-bottom: 5px;
  margin-left: 3px;
}
/* If you don't want the footer to be responsive, remove these media queries */
@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>