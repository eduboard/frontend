<template>
<div class="timeline">

  <!-- Timeline Items -->
  <div v-for="(item, index) in items" :key="index"
  class="timeline__course">

    <!-- Separator Line -->
    <div class="timeline__separator"></div>

    <!-- Description -->
    <p class="timeline__date">
      {{$store.getters.dateStringFromTime(item.date)}}
    </p>
    <p class="timeline__description">
      {{item.message}}
    </p>

    <!-- Files -->
    <ul class="dashboard__course__files">
      <li v-for="(file, index2) in item.files" :key="index2"
        class="dashboard__course__file"> {{file.name}}
        <a :href="file.link"></a>
      </li>
    </ul>

    <!-- Images -->
    <img v-for="(image, index3) in item.pictures" :key="index3"
      :src="image" class="timeline__image">
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

  &__separator {
    border-top: 1px solid $color-text;
  }

  &__date {
    font-weight: 700;
  }

  &__image {
    border: 1px solid red;
  }

}

</style>
