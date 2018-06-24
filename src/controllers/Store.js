import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line
import helpers from './helpers.js';

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
    set(state, object) {
      const name = object.getterName;
      delete object.getterName;
      state[name] = object;

      let counter = 0;
      if (name === 'user') {
        object.role = 'teacher';
      }

      const mockMeetings = [
        'Prokrastinieren,Montag,14-16,MA 700,Jong Shuo',
        'Tagung,Mittwoch,08-12,HA 105,Mark Zucker',
        'Besprechung,Dienstag,16-22,FH 301,Terminator',
        'Training,Donnerstag,08-10,EN 345,Arnold',
        'Cooles Lernen,Freitag,20-22,Zuhause,Du',
        'Achwasauchimmer,Freitag,08-10,Raum 0,Ein Geist',
      ];

      if (name === 'courses') {
        // eslint-disable-next-line
        for (const c of object) {
          c.entries = [
            {
              id: 'asd233wrfs3',
              date: Date.now(),
              message: 'Diese Woche üben wir uns in Prokrastination in dem wir schöne Bilder anschauen. Anbei findet Ihr zwei sehr ablenkende Bilder. Eure Aufgabe für diese Woche ist es, damit mindestens zwei Tage lang Zeit zu schinden. Das dafür benötigte Zusatzmaterial und die genaue Hausaufgabenangabe findet Ihr ebenfalls im Anhang. Ich wünsche weiterhin frohes Prokrastinieren. Erinnert euch daran ja nicht zu viel zu tun.',
              // pictures: ['happy.png', 'testAnswers.png'],
              pictures: ['https://picsum.﻿photos/450/125', 'https://picsum.﻿photos/600/500'],
              files: ['Hausaufgabe1.pdf', 'Zusatzmaterial.docx'],
            }, {
              id: 'asdfn34kl5j43',
              date: Date.now() - 1000 * 3600 * 24 * 9,
              message: 'Dieses mal habe ich für euch nur zwei kleine Leseausschnitte die ihr dafür verwenden könnt, euch möglichst wenig weiterzubilden. Bitte achtet darauf die Abschnitte nur zu überfliegen und so wenig wir möglich Information aufzunehmen.',
              files: ['Leseausschnitt1.pdf', 'Leseausschnitt2.pdf'],
            }, {
              id: 'akl4tj3lk4ng',
              pictures: ['https://picsum.﻿photos/200/300', 'https://picsum.﻿photos/300/200'],
              message: 'In der ersten Lektion werden wir über die Bilder und Textanhänge gehen. Dies ist wichtig damit ihr einen Einblick die unfassbare Leere kriegt, die ihr bereits sein müsst einzugehen. Wenn es euch zu Langweilig ist, macht Ihr es genau richtig.',
              files: ['Wörterbuch', 'VokabularListe.pdf'],
              date: Date.now() - 1000 * 3600 * 24 * 20,
            },
          ].slice(0, 3 - counter);
          c.meetings = mockMeetings.slice(counter, counter + 2).map(m =>
            helpers.parseCalendarString(m));
          c.members = [
            {
              name: 'memberguy'
            }, {
              name: 'other member'
            }
          ];
          counter += 1;
        }
      }
    },
    // addCourse(state, object) {
    // state.courses.push(object)
    // }
    setLastForumById(state, id) {
      state.lastForum = id;
    },
    setLastCourseById(state, id) {
      state.lastCourse = state.courses.find(c => c.id === id) || {};
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
