import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    user: {},
    allCourses: [],
    courses: [],
    users: []
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

      if (name === 'allCourses') {
        // eslint-disable-next-line
        for (const c of object) {
          c.entries = [
            {
              id: 'asd233wrfs3',
              date: Date.now(),
              message: 'This is a course entry',
              pictures: ['happy.png', 'testAnswers.png'],
              files: ['doom.pdf'],
            }, {
              id: 'akl4tj3lk4ng',
              date: Date.now(),
              message: 'This is another course entry',
              pictures: ['testAnswers.png'],
              files: ['doom2.pdf'],
            }, {
              id: 'asdfn34kl5j43',
              date: Date.now(),
              message: 'This is a course entry',
              pictures: ['happy.png', 'testAnswers.png'],
              files: ['doom3.pdf', 'metal.pdf', 'mountain.pdf'],
            }
          ];
          c.members = [
            {
              name: 'memberguy'
            },
            {
              name: 'other member'
            }
          ];
        }
      }
    },
    // addCourse(state, object) {
    // state.courses.push(object)
    // }
  },
  /**
   * These are computed properties based on the current state.
   * They may have no side effect and may not change the state.
   */
  getters: {
    // AllCourses filtered by a searchString
    getCoursesFiltered: state => string =>
      state.allCourses.filter(course =>
        (new RegExp(string.toLowerCase())).test(course.title.toLowerCase())),
    // Courses filtered by a searchString
    getPrivateCoursesFiltered: state => string =>
      state.courses.filter(course =>
        (new RegExp(string.toLowerCase())).test(course.title.toLowerCase())),
    // Get the file list of a course (useful for dashboard)
    getCourseFiles: state => id =>
      state.allCourses.find(cor => cor.id === id).entries.reduce(
        (acc, e) =>
          acc.concat(e.files)
        , []
      ),
    dateStringFromTime: () => (time) => {
      const date = new Date(time);
      return date.toDateString();
    }
  }
});

export { Store, Vue };
