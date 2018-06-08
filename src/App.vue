<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss">

@import "styles/reset";

@import "styles/utility";

@import "styles/ui/container";

$color-primary: #000000;
$color-soft:    #BAC2CA;
$color-text:    #70808E;
$color-bg:      #FAFAFA;
$color-accent:  #50A5FF;

$fs-document:   15px;

$fs-large:      1.375rem;
$fs-x-large:    2rem;


html {
  font-size: $fs-document;
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


button {
  background: $color-primary;
  border: 0;
  color: $color-base;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-weight: 700;
  line-height: 1;
  padding: 1.25rem 1rem;
  text-align: center;
  transition: all $transition;

  &:hover {
    background: $color-text;
  }
}

h2 {
  color: $color-text;
  font-size: $fs-large;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1em;
}

.controls {
  background: $color-primary;
  color: $color-base;
  overflow: auto;
  padding: $spacing-small 0 0;

  &__container {
    display: flex;
    justify-content: space-between;
  }


  &__logo {
    font-size: $fs-x-large;
    line-height: 1;
    margin: 0.5rem 0 $spacing-small;
  }


  &__navigation {
    margin-left: -$padding-x;
    margin-top: auto;


    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      line-height: 1;

      // a, router-link {
        color: $color-text;
        display: block;
        font-weight: 700;
        padding: $spacing-small $padding-x $spacing-small;
        position: relative;
        text-decoration: none;
        cursor: pointer;

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
      // }

      &.router-link-active {
        // a, router-link {
          color: $color-base;
          cursor: default;

          &::after {
            display: block;
          }
        // }
      }
    }
  }


  &__container {
    &--large,
    &--small {
      display: flex;
      flex-direction: column;
    }
  }


  &__user {
    align-items: center;
    display: flex;

    &__name {
      font-size: $fs-large;
      font-weight: 700;
      line-height: 1;
    }

    &__image {
      align-items: center;
      background: $color-base;
      border-radius: 50%;
      color: $color-primary;
      display: flex;
      font-weight: 700;
      height: 50px;
      justify-content: center;
      margin-left: $spacing-large;
      width: 50px;
    }
  }
}

.card {
  background: $color-base;
  @include elevate(2);
  color: $color-text;
  padding: $spacing-base $padding-x $spacing-large;
  position: relative;
  transition: all $transition;


  &:hover {
    @include elevate(10);
  }


  h3 {
    color: $color-primary;
    margin: 0 0 0.75rem;

    span {
      display: none;
    }
  }

  &.new h3 span {
    color: $color-accent;
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

  strong {
    font-size: $fs-small;
  }

  span {
    color: $color-soft;
    font-size: $fs-x-small;
  }

  &.new span {
    color: $color-accent;
    font-weight: bold;
  }

  &.new {
    &::before {
      background: $color-accent;
      border-radius: 50%;
      content: '';
      height: 16px;
      left: -8px;
      position: absolute;
      top: rem-to-px($spacing-base) + 3px;
      width: 16px;
    }
  }


  &__link {
    @extend %absolute;
  }
}


.dashboard {
  display: flex;
  padding-top: $padding-section;


  &__courses {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }


  &__course {
    display: flex;
    margin-bottom: $spacing-base;


    &.card::before {
      top: $spacing-large;
    }


    &__files {
      align-content: flex-end;
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      list-style: none;
      margin: 0 0 0 4%;
      padding: 0;
      position: relative;
      z-index: 10;
    }

    &__file {
      background: $color-primary;
      color: $color-base;
      font-size: $fs-small;
      font-weight: 700;
      line-height: 1;
      margin: 0.3rem;
      padding: 0.4rem 0.5rem 0.5rem;
      position: relative;
      transition: all $transition;

      &:hover {
        background: $color-text;
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
        padding: 0.25rem 0 0.75rem $fs-x-large * 1.25;
        width: 100%;
      }


      svg {
        position: absolute;
        top: 0;
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
