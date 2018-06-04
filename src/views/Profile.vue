<template>
  <div>
    <header class="">
      <Navbar></Navbar>
    </header>
    <div class="container">
      <h1 class="">This is the filler user page.</h1>
      <h2> The landing page of the firm implementing this would be visible here.</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum commodi
        dignissimos porro architecto nemo similique vel voluptate odio deserunt.
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  name: 'profile',
};
</script>

<style>
</style>
