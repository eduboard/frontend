<template>
  <div id="dashboard">

    <main class="container dashboard">

      <CourseList></CourseList>

      <aside class="dashboard__sidebar">

        <Searchbar filler="Kurse durchsuchen..."></Searchbar>

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
  }
};
</script>

<style></style>
