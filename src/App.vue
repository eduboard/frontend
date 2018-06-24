<template>
  <div id="app">
    <header>
      <Navbar></Navbar>
    </header>
    <router-view/>
    <Notification></Notification>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Notification from './components/Notification.vue';

export default {
  components: {
    Navbar,
    Notification
  },
  mounted() {
    this.$api.getSelf();
  }
};
</script>

<style lang="scss">

@import "styles/reset";
@import "styles/utility";
@import "styles/settings";
@import "styles/ui/_ui";

html {
  font-size: $fs-document;
  height: 100%;
}

body {
  background: $color-bg;
  font-size: $fs-base;
  font-family: $ff-system;
  line-height: $lh-base;
}

input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid $color-text;
  color: black;
  outline: 0;

  &::placeholder {
    color: $color-soft;
  }
}

.container {
  &.-narrow {
    max-width: 450px;
  }
}

button {
  background: $color-ui;
  border: 0;
  color: colorInvert($color-ui);
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-weight: 700;
  line-height: 1;
  padding: 1.125rem 2rem;
  text-align: center;
  transition: all $transition;

  &:hover, &:focus {
    background: lighten($color-ui-h, 10%);
  }

  &:active {
    background: darken($color-ui-h, 5%);
  }
}

h2 {
  color: $color-text;
  font-size: $fs-large;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1em;
}

.form {
  &__item {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 1.5rem;
  }


  &__input {
    border-bottom-color: $color-soft;
    padding: 0.625rem 0;
    transition: all $transition;

    &:focus {
      border-bottom-color: $color-text;
    }
  }

  &__text {
    font-size: $fs-small;
    font-weight: bold;
  }

  &__button {
    width: 100%;
  }
}

.card {
  background: $color-base;
  @include elevate(2);
  color: $color-text;
  padding: $spacing-base;
  position: relative;
  transition: all $transition;


  @include break(tablet) {
    padding: $spacing-large $spacing-x-large;
  }


  &:hover, &:focus {
    @include elevate(10);
  }

  &:active {
    @include elevate(1);
  }


  h3 {
    color: $color-primary;
    margin: 0 0 0.75rem;

    span {
      display: none;
    }
  }

  &.new h3 span {
    color: $color-ui;
    display: inline-block;
    font-size: $fs-x-small;
    margin-left: 10px;
  }

  p {
    margin: 0 0 0.75rem;

    &:first-child  {
      color: $color-primary;
      margin-bottom: 0;
    }
  }

  span {
    color: $color-soft;
    font-size: $fs-x-small;
  }

  strong {
    display: block;
    font-size: $fs-small;
    line-height: 1.2;
  }

  &.new span {
    color: $color-ui;
    font-weight: bold;
  }

  &.new {
    $size: 12px;

    &::before {
      background: $color-ui;
      border-radius: 50%;
      content: '';
      height: $size;
      left: -$size / 2;
      position: absolute;
      top: 10px;
      width: $size;
    }
  }


  &__link {
    @extend %absolute;
  }

  &__content {
    display: flex;
    height: 100%;
    flex-direction: column;
  }


  p {
    margin-bottom: 1.25rem;
  }

  .button {
    display: block;
    margin-top: auto;
    width: 100%;
  }
}


</style>
