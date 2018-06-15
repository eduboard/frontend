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

@import "styles/ui/container";

$color-primary: #000000;
$color-soft:    #BAC2CA;
$color-text:    #70808E;
$color-bg:      #F0F0F0;
$color-accent:  #E91E63;
$color-ui:      #3F51B5;
$color-ui-h:    mix($color-ui, $color-accent, 80%);
$color-neutral: #FFEB3B;

$fs-document:   15px;

$fs-large:      1.375rem;
$fs-x-large:    2rem;

$spacing-x-large: $spacing-large + $spacing-base;


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
  color: $color-text;
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

.auth {
  margin-top: 8rem;
  padding-bottom: 10rem;
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

.controls {
  background: $color-ui
    linear-gradient(115deg, $color-ui, $color-ui-h);
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


      @include break(tablet-l, max) {

      }
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
    font-size: 1.5rem;
    line-height: 1;
    margin: 0.5rem 0 1.5rem 48px;


    @include break(tablet-l) {
      font-size: $fs-x-large;
      margin: 0.5rem 0 $spacing-small 0;
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
    }
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


  .button {
    display: block;
    margin-top: 1.25rem;
    width: 100%;
  }
}


.course {
  margin-bottom: $spacing-x-small;

  @include break(tablet-l) {
    margin-bottom: $spacing-base;
  }

  @include break(desktop) {
    display: flex;
  }
}


.overview {

  &__search {
    font-size: 2rem;
    margin: 2rem;
  }

  &__courses {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__course {
    margin: 0 $spacing-x-small ($spacing-x-small * 2);

    @include break(mobile) {
      max-width: calc(#{(100% / 2)} - #{$spacing-x-small * 2});
    }

    @include break(tablet-l) {
      margin: 0 $spacing-base ($spacing-base * 2);
      max-width: calc(#{(100% / 3)} - #{$spacing-base * 2});
    }

    @include break(desktop) {
      max-width: calc(#{(100% / 4)} - #{$spacing-base * 2});
    }
  }
}


.dashboard {
  padding-top: $padding-section / 2;


  @include break(tablet-l, max) {
    padding-left: $spacing-x-small;
    padding-right: $spacing-x-small;
  }

  @include break(tablet-l) {
    display: flex;
    padding-top: $padding-section;
  }


  &__courses {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }


  &__course {

    &__files {
      align-content: flex-end;
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      list-style: none;
      margin: 1rem 0 0 -0.5rem;
      padding: 0;
      position: relative;
      z-index: 10;


      @include break(desktop) {
        margin-left: 4%;
      }
    }

    .card__content {
      margin-right: auto;
    }

    &__file {
      align-items: center;
      background: rgba($color-neutral, 0.3);
      border-radius: 3px;
      color: colorInvert($color-neutral);
      display: flex;
      font-size: $fs-small;
      font-weight: 500;
      line-height: 1;
      margin: 0.3rem;
      padding: 0.4rem 0.5rem 0.5rem;
      position: relative;
      transition: all $transition;

      &:hover {
        background: rgba($color-neutral, 1);
      }

      a {
        @extend %absolute;
      }
    }
  }


  &__sidebar {
    margin-left: $spacing-large * 2;
    flex: 0 0 ($container-width / 4);


    &__search {
      position: relative;

      input {
        padding: 0.75rem 0 0.75rem $fs-x-large * 1.25;
        width: 100%;
      }


      svg {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        left: 0;
        height: $fs-x-large;
        width: $fs-x-large;
      }
    }

    &__all {
      margin-top: $spacing-x-small;
      width: 100%;
    }


    &__messages {
      list-style: none;
      margin: 0;
      padding: 0;
    }


    &__message {
      font-size: $fs-small;
      margin-bottom: $spacing-small;
    }


    h2 {
      margin-top: $padding-section / 2;
    }
  }
}

</style>
