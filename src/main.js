import { Store, Vue } from './controllers/Store';
import App from './App.vue';
import router from './router';
import Api from './controllers/Api';
import helpers from './controllers/helpers';

Vue.config.productionTip = false;

// Make the store globally available
Vue.use({
  Store,
  install(vv) {
    vv.prototype.$store = Store;
  }
});

// Make the API globally available
Vue.use({
  Api,
  install(vv) {
    vv.prototype.$api = Api;
  }
});

// Make the helper functions globablly available
Vue.use({
  helpers,
  install(vv) {
    vv.prototype.$helpers = helpers;
  }
});

// Create the Vue Instance with a router
new Vue({
  router,
  store: Store,
  render: h => h(App),
}).$mount('#app');

// Define route restrictions
const restricted = [
  'search',
  'course',
  'dashboard',
  'profile',
  'manage',
  'forum'
];
const onlyLoggedOut = ['login', 'register'];
const saveLast = {
  forum: 'setLastForum',
  course: 'setLastCourse'
};

// Enforce route restrictions
router.beforeEach((to, from, next) => {
  if (!Store.state.user.email && restricted.includes(to.name)) {
    next('/login');
  } else if (Store.state.user.email && onlyLoggedOut.includes(to.name)) {
    next('/dashboard');
  }
  next();
});

// Make the last course and forums page available in the store
router.afterEach((to) => {
  if (saveLast[to.name]) {
    Store.commit(saveLast[to.name], to.params.id);
  }
});
