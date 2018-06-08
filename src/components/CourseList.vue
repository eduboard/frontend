<template>
<ul class="dashboard__courses">

  <li v-for="(course, index) in courses" :key="index"
  class="dashboard__course card" :class="{new: course.isNew}">

    <div class="card__content">
      <h3>{{course.title + (5 - index)}}<span>{{course.messages}}</span></h3>
      <p>{{course.description + index}}</p>
      <strong>{{course.last + index}}</strong>
    </div>

    <ul class="dashboard__course__files">
      <li v-for="(file, index) in course.files" :key="index"
        class="dashboard__course__file"> {{file.name + index}}
        <a :href="file.link"></a>
      </li>
    </ul>

    <router-link :to="`/courses/${index}`" class="card__link"></router-link>
  </li>

</ul>
</template>

<script>
export default {
  name: 'courselist',
  props: {

  },
  data() {
    return {
      courses: this.$store.state.courses
    };
  },
};
</script>

<style>

</style>
