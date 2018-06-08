<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <div class="container landing">
      <h1 class="">Landing Page</h1>
      <h2> The landing page of the firm implementing this would be visible here.</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum commodi
        dignissimos porro architecto nemo similique vel voluptate odio deserunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia rerum
        cupiditate rem quasi eius voluptatum fugiat eaque officiis quae tempora harum
        magni, suscipit commodi consectetur sed velit quod vitae est? Velit qui eaque
        quidem doloremque consectetur excepturi repudiandae harum quo laudantium
        nostrum sapiente enim modi dolore, expedita dignissimos dolores in.
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
  name: 'landing',
};
</script>

<style lang="scss">

  .landing {
    padding-top: 5%;

    h1, h2, p {
      padding-bottom: 2%;
    }
  }
</style>
