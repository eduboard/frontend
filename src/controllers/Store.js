import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    courses: [],
    allCourses: []
  },
  mutations: {
    user(state, user) {
      state.user = user;
    }
  },
  getters: {

  }
});
