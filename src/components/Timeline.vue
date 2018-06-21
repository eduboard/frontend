<template>
<div class="timeline">

  <!-- Separator Line -->
  <span class="timeline__separator"></span>

  <!-- Description -->

  <!-- List for files/images/videos -->
  <ul class="timeline__list">

    <li v-for="(item, index) in courses" :key="index"
    class="dashboard__course course card" :class="{new: course.isNew}">

    </li>
  </ul>

</div>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    // items: Array
  },
  data() {
    return {
      items: [
        {
          type: 'text',

        }
      ]
    };
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/settings";

.timeline {

  &__separator {
    border-top: 1px solid;
  }

}

</style>
