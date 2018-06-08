import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Store from './controllers/Store';
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
  render: h => h(App),
}).$mount('#app');

// router.beforeEach((to, from, next) => {
//   console.log('to');
//   if (!Store.state.user.email && !to.includes('imprint')
//     && !to.includes('landing') && !to.includes('login')
//     && !to.includes('register')) {
//     // next();
//   }
//   next();
// });
