import Vue from 'vue';
import Router from 'vue-router';
import Course from './views/Course.vue';
import Dashboard from './views/Dashboard.vue';
import Forum from './views/Forum.vue';
import Impressum from './views/Impressum.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/courses/:id',
      name: 'course',
      component: Course,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/info',
      name: 'info',
      component: Impressum,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/forums/:id',
      name: 'forum',
      component: Forum,
    },
  ],
});
