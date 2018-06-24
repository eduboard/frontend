<template>
<ul class="dashboard__courses">

  <li v-for="(c, index) in courses" :key="index"
  class="dashboard__course course card" :class="{new: c.isNew}">

    <div class="card__content">
      <h3>{{c.title}}<span>{{c.messages}}</span></h3>
      <p>{{c.description.slice(0, 160)}}</p>
      <strong>{{c.last}}</strong>
    </div>

    <ul class="dashboard__course__files">
      <li v-for="(file, index) in $store.getters.getCourseFiles(c.id)"
      :key="index" class="dashboard__course__file"> {{file}}
        <a :href="file.link"></a>
      </li>
    </ul>

    <router-link :to="`/courses/${c.id}`" class="card__link"></router-link>
  </li>

</ul>
</template>

<script>
export default {
  name: 'courselist',
  props: {
    courses: Array
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/settings";

.course {
  margin-bottom: $spacing-x-small;

  @include break(tablet-l) {
    margin-bottom: $spacing-base;
  }

  @include break(desktop) {
    display: flex;
  }
}

</style>
