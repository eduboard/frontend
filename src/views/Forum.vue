<template>
  <div class="forum">
    <div class="container">
      <div class="forum_titlebar">
        <h1>{{forum.title}}</h1>
      </div>
      <Timeline class="forum__timeline" :items=forum.entries></Timeline>
      <PostInput class="forum__timeline" :target=forum></PostInput>
    </div>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';
import PostInput from '../components/PostInput.vue';

export default {
  name: 'forum',
  components: {
    Timeline,
    PostInput
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

.fourm {

  &__timeline {
    margin-bottom: 10rem;
  }

  &__post {

  }
}

</style>
