<template>
  <div class="container">
    <div class="overview">

      <Searchbar class="overview__search" filler="Nach Kursen suchen..."></Searchbar>

      <ul class="overview__courses">

        <li class="overview__course card course">
          <div class="card__content">
            <h3>Lineare Algebra II</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quia.</p>
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
  components: {
    Searchbar
  },
  name: 'search',
};
</script>

<style>
</style>
