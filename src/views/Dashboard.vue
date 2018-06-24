<template>
  <div id="dashboard" class="dashboard">

    <main class="container dashboard">

      <div class="dashboard__main">

        <Calendar class="dashboard__main__calendar"
          :meetings="allMeetings" :showRooms="false"></Calendar>

        <CourseList class="dashboard__main__courses"
          :courses="courses"></CourseList>
      </div>

      <aside class="dashboard__sidebar">

        <Searchbar class="dashboard__searchbar" filler="Kurse durchsuchen..."
          v-on:text="searchText = $event"
        ></Searchbar>

        <div>
          <h2 class="dashboard__searchbar">Nachrichten</h2>
          <MessageSidebar :chats="chats"></MessageSidebar>
        </div>

      </aside>
    </main>
  </div>
</template>

<script>
import MessageSidebar from '../components/MessageSidebar.vue';
import Searchbar from '../components/Searchbar.vue';
import CourseList from '../components/CourseList.vue';
import Calendar from '../components/Calendar.vue';


export default {
  name: 'dashboard',
  components: {
    MessageSidebar,
    Searchbar,
    CourseList,
    Calendar
  },
  data() {
    return {
      searchText: '',
      chats: [
        {
          id: '5b1996378c98e652212c76b6',
          text: 'A1 Spanisch: Nachrichtenforum',
          last: '2 ungelesene Nachrichten',
          isNew: true,
        },
        {
          id: '5b1996378c98e652212c76b6',
          text: 'A1 Spanisch: Teilnehmerforum',
          last: 'Letzte Nachricht um 11:03',
          isNew: false,
        },
        {
          id: '5b1996378c98e652212c76b6',
          text: 'Admingruppe',
          last: 'Letzte Nachricht um 11:03',
          isNew: false,
        },
      ],
    };
  },
  computed: {
    courses() {
      return this.$store.getters.getCoursesFiltered(this.searchText);
    },
    allMeetings() {
      return this.$store.getters.allMeetings(0);
    }
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.dashboard {
  padding-top: $padding-section / 2;

  @include break(tablet-l, max) {
    padding-left: $spacing-x-small;
    padding-right: $spacing-x-small;
  }

  @include break(tablet-l) {
    display: flex;
    padding-top: $padding-section;
  }

  &__searchbar {
    display: none;
    @include break(tablet-l) {
      display: block;
    }
  }

  &__courses {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &__main {

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

    &__courses {

    }
  }

  &__course {

    &__files {
      align-content: flex-end;
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      list-style: none;
      margin: 1rem 0 0 -0.5rem;
      padding: 0;
      position: relative;
      z-index: 10;


      @include break(desktop) {
        margin-left: 4%;
      }
    }

    .card__content {
      margin-right: auto;
    }

    &__file {
      align-items: center;
      background: rgba($color-neutral, 0.3);
      border-radius: 3px;
      color: colorInvert($color-neutral);
      display: flex;
      font-size: $fs-small;
      font-weight: 500;
      line-height: 1;
      margin: 0.3rem;
      padding: 0.4rem 0.5rem 0.5rem;
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


  &__sidebar {
    margin-left: $spacing-large * 2;
    flex: 0 0 ($container-width / 4);

    &__search {
      position: relative;

      input {
        padding: 0.75rem 0 0.75rem $fs-x-large * 1.25;
        width: 100%;
      }

      svg {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        left: 0;
        height: $fs-x-large;
        width: $fs-x-large;
      }
    }

    &__all {
      margin-top: $spacing-x-small;
      width: 100%;
    }

    &__messages {
      list-style: none;
      margin: 0;
      padding: 0;
    }


    &__message {
      font-size: $fs-small;
      margin-bottom: $spacing-small;
    }


    h2 {
      margin-top: $padding-section / 2;
    }
  }
}


</style>
