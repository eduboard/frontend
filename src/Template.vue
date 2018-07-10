<template>
  <div class="viewName">
    <div class="container">

      <h1 class="viewName__title">viewName</h1>

      <!-- <Component class="viewName__timeline" :items=course.entries></Component> -->
    </div>
  </div>
</template>

<script>
// import Component from '../components/Component.vue';

export default {
  name: 'course',
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

.viewName {

  &__title {
    color: red;
  }

}

</style>
