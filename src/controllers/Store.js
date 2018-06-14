import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    user: {},
    allCourses: [],
    courses: [
      {
        title: 'Course Title Number ',
        description: 'Course Description Number ',
        last: 'Zuletzt aktualisiert am 23. Mai 201',
        messages: '2 ungelesene Nachrichten',
        isNew: true,
        files: [
          {
            name: 'lineare-gleichungssysteme.pdf',
            type: 'pdf',
            link: '',
          },
          {
            name: 'skalarprodukte.pdf',
            type: 'pdf',
            link: '',
          },
          {
            name: 'eigenwerte.pdf',
            type: 'pdf',
            link: '',
          },
        ],
      },
      {
        title: 'Course Title Number ',
        description: 'Course Description Number ',
        last: 'Zuletzt aktualisiert am 23. Mai 201',
        messages: '',
        isNew: false,
        files: [
          {
            name: 'lineare-gleichungssysteme.pdf',
            type: 'pdf',
            link: '',
          },
          {
            name: 'skalarprodukte.pdf',
            type: 'pdf',
            link: '',
          },
          {
            name: 'eigenwerte.pdf',
            type: 'pdf',
            link: '',
          },
        ],
      },
      {
        title: 'Course Title Number ',
        description: 'Course Description Number ',
        last: 'Zuletzt aktualisiert am 23. Mai 201',
        messages: '',
        isNew: false,
        files: [
        ]
      }
    ]
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

export { Store, Vue };
