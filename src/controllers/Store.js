import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    user: {},
    // allCourses: [
    //   {
    //     title: 'Stoachstik für Infomagiker',
    //     id: '0',
    //     description: ''
    //   },
    //   {
    //     title: 'Lineare Algebra I',
    //     id: '1',
    //     description: ''
    //   },
    //   {
    //     title: 'Lineare Algebra II',
    //     id: '2',
    //     description: ''
    //   },
    //   {
    //     title: 'Prokrastinieren für Anfänger',
    //     id: '3',
    //     description: ''
    //   },
    //   {
    //     title: 'Spanish für Informatiker',
    //     id: '4',
    //     description: ''
    //   },
    //   {
    //     title: 'Russisch für Counter Strike Spieler',
    //     id: '5',
    //     description: ''
    //   }
    // ],
    allCourses: [],
    courses: []
  },
  /**
   * Mutations are setters for the state store.
   * Evaluation and side-effects will be run here.
   */
  mutations: {
    set(state, object) {
      const name = object.getterName;
      delete object.getterName;
      state[name] = object;
    }
  },
  /**
   * These are computed properties based on the current state.
   * They may have no side effect and may not change the state.
   */
  getters: {
    getCoursesFiltered: state => string =>
      state.allCourses.filter(course =>
        (new RegExp(string.toLowerCase())).test(course.title.toLowerCase())),
    getPrivateCoursesFiltered: state => string =>
      state.courses.filter(course =>
        (new RegExp(string.toLowerCase())).test(course.title.toLowerCase())),
  }
});

export { Store, Vue };
