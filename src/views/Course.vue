<template>
  <div class="coursepage">
    <div class="container">

      <!-- Title -->
      <h1 class="coursepage__title">{{course.title}}</h1>

      <!-- Everything except the timeline -->
      <div class="coursepage__start">

        <!-- Left part of the course -->
        <div class="coursepage__maincontent">
          <p class="coursepage__maincontent__description">
            {{course.description}}
          </p>
          <div class="coursepage__maincontent__calendar">

          </div>
        </div>

        <!-- Right part of the course -->
        <div class="coursepage__sidebar">

          <!-- Teacher Settings -->
          <div class="coursepage__sidebar__buttons"
          v-if="$store.state.user.role === 'teacher'">
            <button class="coursepage__sidebar__buttons-button">
              Beitrag hinzufügen
            </button>
            <button class="coursepage__sidebar__buttons-button">
              Forum Hinzufügen
            </button>
            <button class="coursepage__sidebar__buttons-button">
              Nutzer Verwalten
            </button>
          </div>

          <!-- Forums -->
          <MessageSidebar class="dashboard__sidebar__forums"
            :chats="chats"
          ></MessageSidebar>

          <div class="dashboard__sidebar__count">

          </div>
        </div>
      </div>

      <!-- The timeline -->
      <Timeline class="coursepage__timeline" :items=course.entries></Timeline>
    </div>
  </div>
</template>

<script>
import MessageSidebar from '../components/MessageSidebar.vue';
import Timeline from '../components/Timeline.vue';

export default {
  name: 'course',
  components: {
    MessageSidebar,
    Timeline
  },
  computed: {
    course() {
      return this.$store.state.courses.find(course =>
        course.id === this.$route.params.id)
        || { title: '404' };
    }
  },
  data() {
    return {
      chats: [
        {
          id: '5b1996378c98e652212c76b6',
          text: 'Ankündigungen',
          last: '2 ungelesene Nachrichten',
          isNew: true,
        },
        {
          id: '5b1996378c98e652212c76b6',
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
    justify-content: space-between;
  }

  &__maincontent {
    flex: 0 0 60%;

    &__description {

    }

    &__calendar {
      width: 800px;
      border: 5px solid red;
      height: 300px;
    }
  }

  &__sidebar {
    flex: 0 0 25%;

    &__buttons {
      margin-bottom: 2rem;

      &-button {
        width: 100%;
        margin-bottom: 1rem;
      }
    }

    &__forums {

    }

    &__count {

    }
  }

  &__timeline {
    margin-top: 5rem;
    margin-bottom: 10rem;
  }

}

</style>
