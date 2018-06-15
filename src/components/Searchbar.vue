<template>
<div>
  <div class="dashboard__sidebar__search">
    <input v-on:input="$emit('text', searchText)"
    v-model="searchText" type="text" :placeholder="filler">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#70808E" stroke-miterlimit="10" stroke-width=
      "4" d="M39.049 39.049L56 56" stroke-linejoin="round" stroke-linecap="
      round"></path>
      <circle cx="27" cy="27" r="17" fill="none" stroke="#70808E"
      stroke-miterlimit="10" stroke-width="4" stroke-linejoin="round"
      stroke-linecap="round"></circle>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  name: 'searchbar',
  data() {
    return {
      searchText: ''
    };
  },
  props: {
    filler: String
  }
};
</script>

<style></style>
