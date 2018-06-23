<template>
<div class="timeline">

  <!-- Timeline Items -->
  <div v-for="(item, index) in items" :key="index"
  class="timeline__item">

    <!-- Separator Line -->
    <div class="timeline__separator"></div>

    <!-- Contains content so that it can have separate margin -->
    <div class="timeline__container">

      <!-- Date label -->
      <p class="timeline__date">
        {{$store.getters.dateStringFromTime(item.date)}}
      </p>
      <!-- Flexbox so that description and files are side by side -->
      <div class="timeline__flex">

        <div class="">

          <!-- Description -->
          <p class="timeline__description">
            {{item.message}}
          </p>

          <!-- Files -->
          <ul class="dashboard__course__files">
            <li v-for="(file, index2) in item.files" :key="index2"
              class="dashboard__course__file"> {{file}}
              <a href=""></a>
            </li>
          </ul>
        </div>

        <!-- Images -->
        <div class="">
          <img v-for="(image, index3) in item.pictures" :key="index3"
            :src="image" class="timeline__image">
        </div>

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
    margin: 1rem 5rem 5rem;
  }

  &__flex {
    display: flex;
    justify-content: space-between;
  }

  &__separator {
    border-top: 2px solid grey;
  }

  &__date {
    font-weight: 700;
  }

  &__image {
    border: 1px solid red;
  }

}

</style>
