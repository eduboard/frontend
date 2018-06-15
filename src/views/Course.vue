<template>
  <div class="coursepage">
    <div class="container">
      <h1 class="coursepage__title">{{course.title}}</h1>
      <div class="coursepage__start">
        <p class="coursepage__start__description">
          {{course.description}}
        </p>
        <MessageSidebar class="dashboard__sidebar"
          :chats="chats"
        ></MessageSidebar>
      </div>
    </div>
  </div>
</template>

<script>
import MessageSidebar from '../components/MessageSidebar.vue';

export default {
  name: 'course',
  components: {
    MessageSidebar
  },
  data() {
    return {
      course: this.$store.state.courses.find(course =>
        course.id === this.$route.params.id)
      || { title: '404' },
      chats: [
        {
          text: 'Ankündigungen',
          last: '2 ungelesene Nachrichten',
          isNew: true,
        },
        {
          text: 'Teilnehmerforum',
          last: 'Letzte Nachricht um 11:03',
          isNew: false,
        }
      ],
    };
  }
};
</script>


<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.coursepage {

  &__title {

  }

  &__start {

    display: flex;

    &__description {

      margin-right: 5rem;

    }

    &__forums {

    }

  }

}

</style>
