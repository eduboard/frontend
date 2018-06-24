<template>
<div class="timeline">

  <!-- Timeline Items -->
  <div v-for="(item, index) in items" :key="index"
  class="timeline__item">

    <!-- Contains content so that it can have separate margin -->
    <div class="timeline__container">

      <!-- Date label -->
      <p class="timeline__date">
        {{(item.user || '') + $helpers.dateStringFromTime(item.date)}}
      </p>
      <!-- Flexbox so that description and files are side by side -->
      <div class="timeline__flex">

          <!-- Description -->
          <p class="timeline__description">
            {{item.message}}
          </p>

          <!-- Files -->
          <ul class="timeline__files">
            <li v-for="(file, index2) in item.files" :key="index2"
              class="timeline__files__item"> {{file}}
              <a href=""></a>
            </li>
          </ul>
      </div>

      <!-- Images -->
      <div class="timeline__images" v-if="item.pictures">
        <img v-for="(image, index3) in item.pictures" :key="index3"
          :src="image" class="timeline__images__item">
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    items: Array
  },
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/settings";

.timeline {

  &__container {
    margin: 1rem 0;

    @include break(tablet) {
      margin: 1rem;
    }
  }

  &__date {
    font-weight: 700;
  }


  &__item {
    border-top: 1px solid $color-soft;
    padding: $spacing-base 0;
  }

  &__flex {

    @include break(tablet-l) {
      display: flex;
      justify-content: space-between;
    }
  }

  p {
    margin-top: 0;
  }

  &__description {
    flex: 0 0 70%;
  }

  &__files {


    list-style: none;
    margin: 0 0 0 -0.5rem;
    padding: 0;
    flex: 0 0 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 10;

    &__item {
      align-items: center;
      background: rgba($color-neutral, 0.7);
      border-radius: 3px;
      color: colorInvert($color-neutral);
      display: flex;
      font-size: $fs-small;
      font-weight: 500;
      line-height: 1;
      margin: 0.3rem;
      padding: 1rem 1rem 1rem;
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

  &__images {

    &__item {
      height: 150px;
      margin-right: 1rem;
    }
  }
}

</style>
