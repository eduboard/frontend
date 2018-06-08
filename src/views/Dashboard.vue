<template>
  <div id="dashboard">

    <main class="container dashboard">

      <CourseList></CourseList>

      <aside class="dashboard__sidebar">

        <Searchbar filler="Kurse durchsuchen..."></Searchbar>

        <div>
          <h2>Nachrichten</h2>
          <MessageSidebar></MessageSidebar>
        </div>

      </aside>
    </main>
  </div>
</template>

<script>
import MessageSidebar from '../components/MessageSidebar.vue';
import Searchbar from '../components/Searchbar.vue';
import CourseList from '../components/CourseList.vue';

export default {
  components: {
    MessageSidebar,
    Searchbar,
    CourseList,
  },
  name: 'dashboard',
};
</script>

<style></style>
