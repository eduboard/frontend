<template>
<ul class="dashboard__courses">

  <li v-for="(course, index) in $store.state.courses" :key="index"
  class="dashboard__course course card" :class="{new: course.isNew}">

    <div class="card__content">
      <h3>{{course.title}}<span>{{course.messages}}</span></h3>
      <p>{{course.description}}</p>
      <strong>{{course.last}}</strong>
    </div>

    <ul class="dashboard__course__files">
      <li v-for="(file, index) in course.files" :key="index"
        class="dashboard__course__file"> {{file.name}}
        <a :href="file.link"></a>
      </li>
    </ul>

    <router-link :to="`/courses/${course.id}`" class="card__link"></router-link>
  </li>

</ul>
</template>

<script>
export default {
  name: 'courselist'
};
</script>

<style>

</style>
