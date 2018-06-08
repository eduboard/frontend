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

        <div class="container controls__container--small">
          <div v-if="user" class="controls__user">
            <span class="controls__user__name">
            {{user.name + ' ' + user.surname}}</span>
            <div class="controls__user__image">
            {{user.name.slice(0,1) + user.surname.slice(0,1)}}</div>
          </div>

          <nav class="controls__navigation">
            <ul>
              <div v-for="tab in controls" :key="tab.name">
                <router-link ng-if="tab.type === 'main'" tag="li"
                class="controls__navigation__item" :to="tab.url"
                >{{tab.name}}</router-link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'navbar',
  props: {},

  data() {
    return {
      user: this.$store.state.user,
      tabs: [
        {
          name: 'Hauptseite',
          url: 'landing',
        },
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
      controls:[
        {
          name: 'Kursmanagement',
          url: 'logout',
        },
        {
          name: 'Profil',
          url: 'profile',
        },
        {
          name: 'Logout',
          url: 'logout',
        },
      ]
    };
  },

  created() {
    if (this.$store.state.user) {
      return this.$store.state.user;
    }
    return true;
  },

  methods: {
    logout() {
      this.$api.request('POST', 'https://eduboard.io/api/logout', (res) => {
        if (res.success !== false) {
          this.$router.push('/');
        } else {
          console.log('error on logout');
        }
      });
    },
  },
};
</script>

<style lang="scss">

</style>
