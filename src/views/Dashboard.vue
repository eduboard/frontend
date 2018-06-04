<template>
  <div id="dashboard">

    <header class="">
      <Top></Top>
    </header>

    <main class="container dashboard">

      <CourseList></CourseList>

      <aside class="dashboard__sidebar">

        <SearchWithButton></SearchWithButton>
        <div>
          <h2>Nachrichten</h2>
          <MessageSidebar></MessageSidebar>
        </div>

      </aside>
    </main>
  </div>
</template>

<script>
import Top from '../components/Top.vue';
import MessageSidebar from '../components/MessageSidebar.vue';
import SearchWithButton from '../components/SearchWithButton.vue';
import CourseList from '../components/CourseList.vue';

export default {
  components: {
    Top,
    MessageSidebar,
    SearchWithButton,
    CourseList,
  },
  name: 'dashboard',
};
</script>

<style>

</style>
