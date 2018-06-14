<template>
  <div class="coursepage">
    <div class="container">
      <h1 class="coursepage__title">Course title</h1>
      <div class="coursepage__start">
        <p class="coursepage__start__description">
          Kursbeschreibung: Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Reprehenderit nulla quidem, neque suscipit. Ad dignissimos commodi
          eveniet obcaecati nemo deserunt, quo ipsum minima culpa, doloribus aliquam
          adipisci laborum nihil quasi nostrum dolorum et sapiente est deleniti.
          Error unde autem quod incidunt officia! Ex excepturi eius distinctio
          quidem itaque, nostrum quia?
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

.coursepage {

  &__title {

  }

  &__start {

    display: flex;
    // align-content: space-around;

    &__description {

      margin-right: 5rem;

    }

    &__forums {

    }

  }

}

</style>

