import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Auth from './views/Auth.vue';
import Dashboard from './views/Dashboard.vue';
import Landing from './views/Landing.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Auth,
    },
    {
      path: '/register',
      name: 'register',
      component: Auth,
      data: {
        route: 'register',
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});
