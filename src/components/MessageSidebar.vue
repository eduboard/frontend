<template>
<ul class="dashboard__sidebar__messages">
  <li v-for="(chat, index) in chats" :key="index"
  class="dashboard__sidebar__message card" :class="{new: chat.isNew}">
    <div class="card__content">
      <p>{{chat.text + index}}</p>
      <span>{{chat.last}}</span>
    </div>
    <a href="" class="card__link"></a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'messagesidebar',
  props: {

  },
  data() {
    return {
      chats: [
        {
          text: 'Chat Title Number ',
          last: '2 ungelesene Nachrichten',
          isNew: true,
        },
        {
          text: 'Chat Title Number ',
          last: 'Letzte Nachricht um 11:03',
          isNew: false,
        },
        {
          text: 'Chat Title Number ',
          last: 'Letzte Nachricht um 11:03',
          isNew: true,
        },
      ],
    };
  },
};
</script>

<style>

</style>
