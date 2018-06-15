<template>
  <div class="container">
    <div class="overview">

      <Searchbar class="overview__search" filler="Nach Kursen suchen..."></Searchbar>

      <ul class="overview__courses">

        <li v-for="course in $store.state.allCourses" :key="course.id"
          class="overview__course card course">

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
      search: ''
    };
  },
  computed: {
    allCourses() {
      return this.$store.state.allCourses;
    }
  }
};
</script>

<style>
</style>
