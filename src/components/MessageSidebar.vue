<template>
<ul class="dashboard__sidebar__messages">
  <li v-for="(chat, index) in chats" :key="index"
  class="dashboard__sidebar__message card" :class="{new: chat.isNew}">
    <div class="card__content">
      <p>{{chat.text}}</p>
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
    chats: Array
  },
  mount() {
    console.log(this.chats);
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

</style>
