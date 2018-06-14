import { Store, Vue } from './controllers/Store';
import App from './App.vue';
import router from './router';
import Api from './controllers/Api';

Vue.config.productionTip = false;

Vue.use({
  Store,
  install(vv) {
    vv.prototype.$store = Store;
  }
});

Vue.use({
  Api,
  install(vv) {
    vv.prototype.$api = Api;
  }
});

new Vue({
  router,
  store: Store,
  render: h => h(App),
}).$mount('#app');

const nonRestricted = ['login', 'imprint', 'register', 'landing', 'search'];
const onlyLoggedOut = ['login', 'register'];

router.beforeEach((to, from, next) => {
  if (!Store.state.user.email && !nonRestricted.includes(to.name)) {
    next('/login');
  } else if (Store.state.user.email && onlyLoggedOut.includes(to.name)) {
    next('/dashboard');
  }
  next();
});
