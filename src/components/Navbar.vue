<template>
    <div class="controls">
      <div class="container controls__container">
        <div class="container controls__container--large">
          <h1 class="controls__logo">eduBoard</h1>
          <nav class="controls__navigation">
            <ul>
              <router-link v-for="tab in tabs" :key="tab.name" tag="li"
              class="controls__navigation__item" :to="tab.url"
              >{{tab.name}}</router-link>
            </ul>
          </nav>
        </div>

        <div v-if="user" class="container controls__container--small">
          <div class="controls__user">
            <span class="controls__user__name">{{user.name}}</span>
            <div class="controls__user__image">{{user.short}}</div>
          </div>

          <nav class="controls__navigation">
            <ul>
              <router-link tag="li" class="controls__navigation__item" to="/profile">
              Profil</router-link>
              <li class="controls__navigation__item">
                <a @click="logout()" class="hover">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
// import api from '../mixins/api';

export default {
  name: 'navbar',
  // Daten die vom View zum Component übergeben werden
  props: {

  },
  mixins: [
    // api,
  ],
  // Daten die zu diesem Component gehören
  data() {
    return {
      user: {
        name: 'Annabelle Bauer',
        short: 'AB',
      },
      tabs: [
        {
          name: 'Dashboard',
          url: 'dashboard',
        },
        {
          name: 'Impressum',
          url: 'imprint',
        },
        {
          name: 'Hilfe',
          url: 'help',
        },
      ],
    };
  },
  // Funktionen die zu diesem Component gehören
  methods: {
    logout() {
      this.request('POST', '/api/v1/logout', (res) => {
        if (res) {
          setTimeout(() => {
            this.$router.push('/');
          }, 500);
        }
      });
    },
    profile() {
    },
    request(method, url, callback, body) {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function onResponse() {
        // If a JSON response
        if (this.readyState === 4 && req.responseText[0] === '{') {
          callback(JSON.parse(req.responseText));
        // If not a JSON response
        } else if (this.readyState === 4) {
          callback({
            success: false,
            status: this.status,
            msg: req.responseText,
          });
        }
      };
      req.open(method, url, true);
      if (typeof body !== 'undefined') {
        req.setRequestHeader('Content-Type', 'application/json');
      }
      req.send(body);
    },
  },
};
</script>

<style lang="scss">

</style>
