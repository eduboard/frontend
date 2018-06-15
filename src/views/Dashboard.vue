<template>
  <div id="dashboard">

    <main class="container dashboard">

      <CourseList :courses="courses"></CourseList>

      <aside class="dashboard__sidebar">

        <Searchbar filler="Kurse durchsuchen..."
          v-on:text="searchText = $event"
        ></Searchbar>

        <div>
          <h2>Nachrichten</h2>
          <MessageSidebar :chats="chats"></MessageSidebar>
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
  name: 'dashboard',
  components: {
    MessageSidebar,
    Searchbar,
    CourseList,
  },
  data() {
    return {
      searchText: '',
      chats: [
        {
          text: 'A1 Spanisch: Nachrichtenforum',
          last: '2 ungelesene Nachrichten',
          isNew: true,
        },
        {
          text: 'A1 Spanisch: Teilnehmerforum',
          last: 'Letzte Nachricht um 11:03',
          isNew: false,
        },
        {
          text: 'Admingruppe',
          last: 'Letzte Nachricht um 11:03',
          isNew: false,
        },
      ],
    };
  },
  computed: {
    courses() {
      return this.$store.getters.getPrivateCoursesFiltered(this.searchText);
    }
  }
};
</script>

<style></style>
