<template>
  <div class="admin">
    <div class="container">

      <h1 class="admin__title">admin</h1>

      <!-- <Component class="admin__timeline" :items=course.entries></Component> -->
    </div>
  </div>
</template>

<script>
// import Component from '../components/Component.vue';

export default {
  name: 'admin',
  props: {},
  components: {},
  computed: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.admin {

  &__title {
    color: red;
  }

}

</style>
