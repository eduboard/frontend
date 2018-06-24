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

      let counter = 0;
      if (name === 'user') {
        object.role = 'teacher';
      }
      if (name === 'courses') {
        // eslint-disable-next-line
        for (const c of object) {
          c.entries = [
            {
              id: 'asd233wrfs3',
              date: Date.now(),
              message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestiae eaque tempore, amet facilis laudantium, officia repellat magni, porro sunt ipsa, fuga dicta quasi blanditiis ullam beatae. Saepe distinctio non nam molestiae mollitia, id ratione, adipisci odio facere aliquam expedita, accusantium fuga ipsa illo cumque. Dolores ea, assumenda. Tenetur, officia.',
              // pictures: ['happy.png', 'testAnswers.png'],
              pictures: ['https://picsum.﻿photos/450/125', 'https://picsum.﻿photos/600/500'],
              files: ['abgabeTextTest.pdf'],
            }, {
              id: 'akl4tj3lk4ng',
              date: Date.now(),
              message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laborum veritatis, dignissimos aliquam voluptatum doloribus beatae, consequuntur tempore in cum.',
              files: ['untergangDerWelt.pdf'],
            }, {
              id: 'asdfn34kl5j43',
              date: Date.now(),
              message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laborum praesentium? Suscipit culpa quas, aspernatur!',
              pictures: ['https://picsum.﻿photos/200/300', 'https://picsum.﻿photos/300/200'],
              files: ['doom3.pdf', 'metal.pdf', 'mountain.pdf'].slice(0, counter),
            }
          ];
          counter += 1;
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
    getCourseFiles: state => (id) => {
      const course = state.courses.find(cor => cor.id === id);
      if (!course) return [];
      return course.entries.reduce(
        (acc, e) =>
          acc.concat(e.files)
        , []
      );
    },
    dateStringFromTime: () => (time) => {
      const date = new Date(time);
      return date.toDateString();
    }
  }
});

export { Store, Vue };
