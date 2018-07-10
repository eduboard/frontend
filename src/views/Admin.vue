<template>
  <div id="admin" class="admin">
    <div class="container">
      <div class="admin_main">
        <div class="coursesearch">
          <Searchbar class="coursesearch__search" filler="Nach Kursen suchen..."
            v-on:text="searchText = $event"></Searchbar>
          <ul class="admin__courses">
            <li v-for="course in allCourses"
              :key="course.id" class="coursesearch__course card course">
              <div class="card__content">
                <h3>{{course.title}}</h3>
                <p>{{course.description.slice(0, 100)}}</p>
              </div>
              <router-link :to="`/courses/${course.id}`" class="card__link"></router-link>
            </li>
          </ul>
        </div>
        <div class="usersearch">
          <Searchbar class="usersearch__search" filler="Nach Usern suchen..."
            v-on:text="searchText = $event"></Searchbar>
          <ul class="admin__users">
            <li v-for="user in allUsers"
              :key="user.id" class="usersearch__user card user">
              <div class="card__content">
                <h3>{{user.name}} {{user.surname}}</h3>
              </div>
              <a :href="`mailto:${user.email}`">{{user.email}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue';

export default {
  name: 'admin',
  components: {
    Searchbar
  },
  data() {
    return {
      searchText: '',
      allUsers: [
        {
          email: 'best@test.com',
          name: 'Franz',
          surname: 'Boiler',
          id: '5b2e9a35382d33000158aa28'
        }, {
          email: 'habadaba@test.com',
          name: 'Mark',
          surname: 'Sichler',
          id: '5b2e9a35382d33000158aa29'
        }, {
          email: 'tennis@test.com',
          name: 'Tennis',
          surname: 'Arm',
          id: '5b2e9a35382d33000158aa30'
        }, {
          email: 'never@test.com',
          name: 'Never',
          surname: 'GonnaGiveYouUp',
          id: '5b2e9a35382d33000158aa31'
        },
      ],
    };
  },
  computed: {
    allCourses() {
      return this.$store.getters.getCoursesFiltered(this.searchText);
    },
  },
};


</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.coursesearch {

  &__search {
    font-size: 1.25rem;
    margin: 2rem 1rem;

    @include break(laptop) {
      font-size: 2rem;
    }
  }

  &__courses {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__course {
    // min-width: 420px;
    flex: 0 0 100%;

    @include break(mobile) {
      flex-basis: calc(#{(100% / 2)} - #{$spacing-x-small * 2});
      margin: 0 $spacing-x-small ($spacing-x-small * 2);
    }

    @include break(tablet-l) {
      margin: 0 $spacing-base ($spacing-base * 2);
      flex-basis: calc(#{(100% / 3)} - #{$spacing-base * 2});
    }

    @include break(desktop) {
      flex-basis: calc(#{(100% / 4)} - #{$spacing-base * 2});
    }
  }
}

</style>
