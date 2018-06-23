import Vue from 'vue';
import Router from 'vue-router';
import Course from './views/Course.vue';
import Dashboard from './views/Dashboard.vue';
import Forum from './views/Forum.vue';
import Impressum from './views/Impressum.vue';
import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/landing',
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing,
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
      path: '/imprint',
      name: 'imprint',
      component: Impressum,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum,
    },
  ],
});
