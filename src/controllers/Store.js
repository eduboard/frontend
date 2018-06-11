import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    allCourses: [],
    courses: []
  },
  /**
   * Mutations are setters for the state store.
   * Evaluation and side-effects will be run here.
   */
  mutations: {
    user(state, user) {
      state.user = user;
    },
    courses(state, courses) {
      state.courses = courses;
    },
    allCourses(state, allCourses) {
      state.allCourses = allCourses;
    },
  },
  /**
   * These are computed properties based on the current state.
   * They may have no side effect and may not change the state.
   */
  getters: {

  }
});
