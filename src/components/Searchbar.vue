<template>
<div>
  <div class="searchbar">
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

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.searchbar {
  position: relative;

  input {
    padding: 0.75rem 0 0.75rem $fs-x-large * 1.25;
    width: 100%;
  }

  svg {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    left: 0;
    height: $fs-x-large;
    width: $fs-x-large;
  }
}

</style>
