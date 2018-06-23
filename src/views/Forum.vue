<template>
  <div class="forum">
    <div class="container">
      <div class="forum_titlebar">
      </div>
      <Timeline class="coursepage__timeline" :items=forum.entries></Timeline>
    </div>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';

export default {
  name: 'forum',
  components: {
    Timeline
  },
  computed: {
    forum() {
      return this.$store.state.courses.find(course =>
        course.id === this.$route.params.id)
        || { title: 'Forum wird geladen... Bitte warten' };
    }
  },
  data() {
    return {

    };
  }
};
</script>


<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.coursepage {

  &__timeline {
    margin-bottom: 10rem;
  }
}

</style>
