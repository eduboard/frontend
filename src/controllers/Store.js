import Vue from 'vue';
import Vuex from 'vuex';
// import helpers from './helpers.js';
import mock from './mock.js';
// import Api from './Api.js';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    user: {},
    allCourses: [],
    courses: [],
    users: [],
    lastCourse: {},
    lastForum: {}
  },
  /**
   * Mutations are setters for the state store.
   * Evaluation and side-effects will be run here.
   */
  mutations: {
    setUser(state, user) {
      if (user.id) {
        user.role = 'teacher';
      }
      state.user = user;
    },
    setCourses(state, courses) {
      // state.courses = courses;
      if (courses) {
        state.courses = mock.courses;
      }
    },
    setAllCourses(state, courses) {
      state.allCourses = courses;
    },
    setUserList(state, users) {
      state.users = users;
    },
    setLastForumById(state, id) {
      state.lastForum = id;
    },
    setLastCourseById(state, id) {
      state.lastCourse = state.courses.find(c => c.id === id) || {};
    },
    createPost(state, post) {
      const course = state.courses.find(c => c.id === post.courseId);
      if (course) {
        course.entries.unshift(post);
      } else {
        console.log(`Could not create post on ${post.courseId}`);
      }
    },
    createCourse(state, course) {
      state.courses.unshift(course);
    }
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
    allMeetings: state => time =>
      state.courses.reduce(
        (acc, c) =>
          acc.concat(c.meetings.map((m) => {
            m.coursename = c.title;
            return m;
          })) || time
        , []
      )
  }
});

export { Store, Vue };
