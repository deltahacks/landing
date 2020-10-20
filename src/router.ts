import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Faq from './new-components/Faq.vue';
import Backdrop from './views/Backdrop.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'backdrop',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Backdrop.vue'),
    },
    {
      path: '/new/blurb',
      name: 'blurb',
      component: () => import(/* webpackChunkName: "about" */ './new-components/New_Blurb.vue'),
    },
    {
      path: '/new/gradient',
      name: 'gradient',
      component: () => import(/* webpackChunkName: "about" */ './new-views/New_Gradient.vue'),
    },
    {
      path: '/new/Header',
      name: 'Header',
      component: () => import(/* webpackChunkName: "about" */ './new-components/Header.vue'),
    },
    {
      path: '/new/Faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "about" */ './new-components/Faq.vue'),
    },
    {
      path: '/new/Nav',
      name: 'nav',
      component: () => import(/* webpackChunkName: "about" */ './new-components/New_Navbar2.vue'),
    },
  ],
});
