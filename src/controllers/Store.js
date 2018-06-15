import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    user: {},
    allCourses: [
      {
        title: 'Stoachstik für Infomagiker',
        id: '0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quibusdam fuga mollitia officia impedit magnam, ratione deserunt reiciendis.',
      },
      {
        title: 'Lineare Algebra I',
        id: '1',
        description: 'Aliquid porro harum odit nobis reprehenderit quaerat error soluta. Tenetur veniam aperiam perferendis necessitatibus atque, voluptatum officiis numquam minus distinctio.',
      },
      {
        title: 'Lineare Algebra II',
        id: '2',
        description: 'Distinctio aspernatur illo voluptate aliquid amet et, consequuntur, recusandae laudantium ut rem beatae incidunt consequatur expedita reprehenderit at, officiis iure iste inventore quis a esse deleniti quibusdam?',
      },
      {
        title: 'Prokrastinieren für Anfänger',
        id: '3',
        description: 'Non dignissimos hic at soluta explicabo distinctio vitae inventore neque, ad id, totam ullam repellendus!',
      },
      {
        title: 'Spanish für Informatiker',
        id: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, id, nihil. Et, fugit, sapiente sunt magnam sint ad dignissimos id vero alias molestias eveniet eaque quisquam dolore quam hic maiores quidem obcaecati, blanditiis suscipit aliquam at ea.',
      },
      {
        title: 'Russisch für Counter Strike Spieler',
        id: '5',
        description: 'Numquam maiores unde corporis, quas eveniet deleniti, ducimus quisquam sit ullam libero incidunt vel possimus blanditiis nulla consectetur commodi in.',
      }
    ],
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
      // TODO Do not actually mock files
      // eslint-disable-next-line
      for (const c of courses) {
        const a = [
          {
            name: 'Slides Treffen 5',
            link: ''
          },
          {
            name: 'Slides Treffen 4',
            link: ''
          },
          {
            name: 'Cooles Video vielleicht',
            link: ''
          },
          {
            name: 'Abgabe.pdf',
            link: ''
          },
          {
            name: 'Feedback Bogen',
            link: ''
          }
        ];
        let j;
        let x;
        let i;
        for (i = a.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        c.files = a;
        c.description += ` Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Hic magni quasi ducimus ipsa soluta,
quod dicta maxime dolores alias esse.`;
      }
      state.courses = courses;
    },
    allCourses(state, allCourses) {
      // TODO Remove and set right commit in Api.js
      if (allCourses.length > 5) {
        state.allCourses = allCourses;
      }
    },
  },
  /**
   * These are computed properties based on the current state.
   * They may have no side effect and may not change the state.
   */
  getters: {
    getCoursesFiltered: state => string =>
      state.allCourses.filter(course =>
        course.title.toLowerCase().startsWith(string.toLowerCase())),
    getPrivateCoursesFiltered: state => string =>
      state.courses.filter(course =>
        course.title.toLowerCase().startsWith(string.toLowerCase()))
  }
});

export { Store, Vue };
