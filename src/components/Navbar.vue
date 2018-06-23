<template>
    <div class="controls">
      <div class="container controls__container">
        <div class="controls__container--large">
          <div class="controls__logo">
            <img class="controls__logo__image" src="../assets/skb.png" alt="">
            <h1 class="controls__logo__title">eduBoard</h1>
          </div>
          <button class="controls__menu-button" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="controls__navigation">
            <ul>
              <router-link v-if="$store.state.user.email"
              tag="li" class="controls__navigation__item"
              to="/dashboard">Dashboard</router-link>
              <router-link tag="li"
              class="controls__navigation__item"
              to="/landing">News</router-link>
              <router-link v-if="$store.state.user.email"
              tag="li" class="controls__navigation__item"
              to="/search">Kurssuche</router-link>
              <router-link tag="li" class="controls__navigation__item"
              to="/imprint">Imprint</router-link>
            </ul>
          </nav>
        </div>

        <div class="container controls__container--small">
          <div v-if="$store.state.user.email" class="controls__user">
            <span class="controls__user__name">
            {{$store.state.user.name + ' ' + $store.state.user.surname}}</span>
            <div class="controls__user__image">
            {{$store.state.user.name.slice(0,1) +
            $store.state.user.surname.slice(0,1)}}</div>
          </div>

          <nav class="controls__navigation">
            <ul>
              <router-link v-if="$store.state.user.role === 'teacher'" tag="li"
              class="controls__navigation__item"
              to="/course-management">Kursverwaltung</router-link>
              <router-link v-if="$store.state.user.role === 'admin'" tag="li"
              class="controls__navigation__item"
              to="/user-management">Nutzerverwaltung</router-link>
              <router-link v-if="$store.state.user.email"
              tag="li" class="controls__navigation__item"
              to="/profile">Profil</router-link>
              <li v-if="$store.state.user.email" class="controls__navigation__item"
              @click="logout()">Logout</li>
              <router-link v-if="!$store.state.user.email"
              tag="li" class="controls__navigation__item"
              to="/login">Login</router-link>
              <router-link v-if="!$store.state.user.email"
              tag="li" class="controls__navigation__item"
              to="/register">Register</router-link>
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
  methods: {
    logout() {
      this.$api.logout();
    },
    toggleMenu() {
      console.log('toggled menu');
    }
  },
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.controls {
  background: $color-ui linear-gradient(115deg, $color-ui, $color-ui-h);
  color: $color-base;
  padding: $spacing-small 0 0;
  position: relative;

  &__container {
    display: flex;
    justify-content: space-between;

    &--large,
    &--small {
      display: flex;
      flex-direction: column;
    }

    &--large {
      flex: 1 1 1400px;

    }

    &--small {
      flex: 1 1 300px;

      @include break(tablet-l) {
        flex-shrink: 0;
      }

      p {
        &:only-child {
          color: rgba(colorInvert($color-ui), 0.5);
          margin: auto 0 $spacing-small 0;
          text-align: right;
        }

        a {
          border-bottom: 1px solid transparent;
          color: colorInvert($color-ui);
          font-weight: bold;
          text-decoration: none;
          transition: all $transition;

          &:hover {
            border-bottom: 1px solid;
          }
        }
      }
    }
  }


  &__logo {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 1;
    display: flex;
    align-items: center;

    @include break(tablet-l) {
      font-size: $fs-x-large;
      margin: 0.5rem 0 $spacing-small 0;
    }

    &__image {
      width: 69px;
      margin: 0 0;
    }

    &__title {
      margin: 0;
      margin-left: 12px;
      font-size: inherit;
      line-height: inherit;
    }
  }


  &__navigation {
    display: none;
    margin-left: -$padding-x;
    margin-top: auto;


    @include break(tablet-l) {
      display: block;
    }


    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      line-height: 1;

      color: rgba(colorInvert($color-ui), 0.5);
      cursor: pointer;
      display: block;
      font-weight: 700;
      padding: $spacing-small $padding-x $spacing-small;
      position: relative;
      text-decoration: none;
      transition: all $transition;

      &:hover {
        color: $color-bg;
      }

      &::after {
        border-top: 3px solid $color-base;
        bottom: 0;
        content: '';
        display: none;
        left: 0;
        position: absolute;
        width: 100%;
      }

      &.router-link-active {
        color: $color-base;
        cursor: default;

        &::after {
          display: block;
        }
      }
    }
  }


  &__menu-button {
    background: transparent !important;
    color: colorInvert($color-ui);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    padding: 0;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    width: 24px;

    span {
      border-bottom: 2px solid;
      border-radius: 2px;
      display: block;
      width: inherit;
    }


    @include break(tablet-l) {
      display: none;
    }
  }


  &__user {
    align-items: center;
    display: none;
    justify-content: space-between;


    @include break(tablet-l) {
      display: flex;
    }


    &__name {
      display: block;
      font-size: $fs-large;
      font-weight: 700;
      line-height: 1;
      text-transform: capitalize;
    }

    &__image {
      align-items: center;
      background: $color-base;
      border-radius: 50%;
      color: $color-ui;
      display: flex;
      flex: 0 0 50px;
      font-weight: 700;
      height: 50px;
      justify-content: center;
      margin-left: $spacing-large;
      text-transform: uppercase;
    }
  }
}

</style>
