import Vue from 'vue';
import Vuex from 'vuex';
// import helpers from './helpers.js';
// import mock from './mock.js';
// import Api from './Api.js';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    user: {},
    allCourses: [],
    courses: [],
    userList: [],
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
        user.role = 'admin';
      }
      state.user = user;
    },
    setCourses(state, courses) {
      state.courses = courses;
      // if (courses) {
      // state.courses = mock.courses;
      // }
    },
    setAllCourses(state, courses) {
      state.allCourses = courses;
    },
    setUserList(state, users) {
      state.userList = users;
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
    },
    createForum() {
    },
    deleteUser() {
    },
    deleteCourse() {
    },
    deleteEntry() {
    },
    deleteForum() {
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
    // UserList filtered by a searchString
    getUsersFiltered: state => string =>
      state.userList.filter(user =>
        (new RegExp(string.toLowerCase())).test(user.email.toLowerCase())),
    // Courses filtered by a searchString
    getPrivateCoursesFiltered: state => string =>
      state.courses.filter(course =>
        (new RegExp(string.toLowerCase())).test(course.title.toLowerCase())),
    // Get the file list of a course (useful for dashboard)
    getCourseFiles: state => (id) => {
      const course = state.courses.find(cor => cor.id === id);
      if (!course || !course.entries) return [];
      return course.entries.reduce(
        (acc, e) =>
          acc.concat(e.files)
        , []
      );
    },
    // Participants of a course filtered by a searchString
    // TODO: Noch gibt die Funktion einfach alle user zurück
    getParticipantsOfCourseFiltered: state => string =>
      state.users.filter(user =>
        (new RegExp(string.toLowerCase())).test(user.name.toLowerCase())),
    allUsers: state => () =>
      state.users,
    // allMeetings: state => (time) => {
    allMeetings: state => () => {
      const ret = [];
      // Loop over all courses and extract meetings
      for (const course of state.courses) {
        if (course.meetings) {
          ret.concat(course.meetings.map((m) => {
            // Attach the coursename too
            m.coursename = course.title || '';
            return m;
          }));
        }
      }
      return ret;
    }
  }
});

export { Store, Vue };
