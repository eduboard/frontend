<template>
    <div class="controls">
      <div class="container controls__container">
        <div class="controls__container--large">
          <h1 class="controls__logo">eduBoard</h1>
          <button class="controls__menu-button">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="controls__navigation">
            <ul>
              <router-link v-if="user.email" tag="li" class="controls__navigation__item"
              to="/dashboard">Dashboard</router-link>
              <router-link tag="li" class="controls__navigation__item"
              to="/landing">News</router-link>
              <router-link v-if="user.email" tag="li" class="controls__navigation__item"
              to="/search">Kurssuche</router-link>
              <router-link tag="li" class="controls__navigation__item"
              to="/imprint">Imprint</router-link>

              <!-- <router-link v-for="tab in tabs" :key="tab.name" tag="li" -->
              <!-- class="controls__navigation__item" :to="tab.url" -->
              <!-- >{{tab.name}}</router-link> -->
            </ul>
          </nav>
        </div>

        <div class="container controls__container--small">
          <div v-if="user.email" class="controls__user">
            <span class="controls__user__name">
            {{user.name + ' ' + user.surname}}</span>
            <div class="controls__user__image">
            {{user.name.slice(0,1) + user.surname.slice(0,1)}}</div>
          </div>

          <nav class="controls__navigation">
            <ul>

              <router-link v-if="user.role === 'teacher'" tag="li"
              class="controls__navigation__item"
              to="/course-management">Kursverwaltung</router-link>
              <router-link v-if="user.role === 'admin'" tag="li"
              class="controls__navigation__item"
              to="/user-management">Nutzerverwaltung</router-link>
              <router-link v-if="user.email" tag="li" class="controls__navigation__item"
              to="/profile">Profil</router-link>
              <li v-if="user.email" class="controls__navigation__item"
              @click="logout()">Logout</li>
              <router-link v-if="!user.email" tag="li" class="controls__navigation__item"
              to="/login">Login</router-link>
              <router-link v-if="!user.email" tag="li" class="controls__navigation__item"
              to="/register">Register</router-link>

             <!-- <div v-for="tab in controls" :key="tab.name">
                <router-link ng-if="tab.type === 'main'" tag="li"
                class="controls__navigation__item" :to="tab.url"
                >{{tab.name}}</router-link>
              </div> -->
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
      // user: {}
      user: this.$store.state.user;
    };
  },
  methods: {
    logout() {
      this.$api.logout();
    }
  },
  mount() {
    // this.$store.subscribe((mutation, state) => {
    //   if (mutation === 'user') {
    //     this.user = state;
    //   }
    // });
  }
};
</script>

<style></style>
