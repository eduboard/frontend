<template>
  <div class="container">
    <div class="coursesearch">

      <Searchbar class="coursesearch__search" filler="Nach Kursen suchen..."
        v-on:text="searchText = $event"
      ></Searchbar>

      <ul class="coursesearch__courses">

        <li v-for="course in allCourses"
          :key="course.id" class="coursesearch__course card course">

          <div class="card__content">
            <h3>{{course.title}}</h3>
            <p>{{course.description}}</p>
            <button class="button">Anmelden</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue';

export default {
  name: 'search',
  components: {
    Searchbar
  },
  data() {
    return {
      searchText: ''
    };
  },
  computed: {
    allCourses() {
      return this.$store.getters.getCoursesFiltered(this.searchText);
    }
  }
};
</script>


<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.coursesearch {

  &__search {
    font-size: 2rem;
    margin: 2rem;
  }

  &__courses {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    @include break(tablet-l) {
      justify-content: space-between;
    }
  }

  &__course {
    min-width: 420px;
    margin: 0 $spacing-x-small ($spacing-x-small * 2);

    @include break(mobile) {
      max-width: calc(#{(100% / 2)} - #{$spacing-x-small * 2});
    }

    @include break(tablet-l) {
      margin: 0 $spacing-base ($spacing-base * 2);
      max-width: calc(#{(100% / 3)} - #{$spacing-base * 2});
    }

    @include break(desktop) {
      max-width: calc(#{(100% / 4)} - #{$spacing-base * 2});
    }
  }
}

</style>
