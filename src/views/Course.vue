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
            {{course.description}}</p>
          <Calendar class="coursepage__maincontent__calendar"
            :meetings="course.meetings" :showRooms="true"></Calendar>
        </div>

        <!-- Right part of the course -->
        <div class="coursepage__sidebar">

          <!-- Teacher Settings -->
          <div class="coursepage__sidebar__buttons"
          v-if="$store.state.user.role === 'teacher'">
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

          <h2 class="dashboard__sidebar__count">
            {{course.members && course.members.length}} Nutzer in diesem Kurs
          </h2>
        </div>
      </div>

      <!-- Timeline Post Input -->
      <PostInput class="coursepage__postinput" :target=course></PostInput>

      <!-- The timeline -->
      <Timeline class="coursepage__timeline" :items=course.entries></Timeline>
    </div>
  </div>
</template>

<script>
import MessageSidebar from '../components/MessageSidebar.vue';
import Timeline from '../components/Timeline.vue';
import Calendar from '../components/Calendar.vue';
import PostInput from '../components/PostInput.vue';

export default {
  name: 'course',
  components: {
    MessageSidebar,
    Timeline,
    PostInput,
    Calendar
  },
  computed: {
    course() {
      return this.$store.state.courses.find(course =>
        course.id === this.$route.params.id)
        || { title: 'Seite wird geladen... Bitte warten' };
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
    @include break(desktop) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__maincontent {
    flex: 0 0 65%;

    &__description {

    }

    &__calendar {
      // width: 100%;
      height: 360px;
      margin: 0 (-$padding-x) $spacing-large;
      position: relative;


      @include break(desktop) {
        margin-left: 0;
        margin-right: 0;
      }

      @include break(desktop, max) {
        // display: none;
      }

    }
  }

  &__sidebar {
    flex: 0 0 25%;


    @include break(tablet) {
      @include break(desktop, max) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;


        &__buttons,
        ul {
          flex: 0 0 48%;
        }

        ul {
          order: 1;
        }

        &__buttons {
          order: 2;
        }

        h2 {
          order: 3;
          width: 100%;
        }
      }
    }


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
      margin-top: 1rem;
      text-align: center;
    }
  }

  &__timeline {
    margin-top: 5rem;
    margin-bottom: 10rem;
  }

  &__postinput {
    margin-right: auto;
    margin-left: auto;
  }

}

</style>
