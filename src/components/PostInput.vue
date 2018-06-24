<template>
  <div class="postinput">
    <div class="postinput__topbar">
      Neuen Post erstellen
    </div>

    <div class="postinput__inputs">
      <input class="postinput__inputs__post" v-model="inputModel" type="text"
        placeholder="Verfasse hier deinen Post...">
    </div>

    <div class="postinput__controls">
      <button class="postinput__controls-button">Save</button>
      <button class="postinput__controls-button">New</button>
      <button class="postinput__controls-button">Add Files</button>
      <button class="postinput__controls-button">Add Pictures</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postinput',
  props: {
    target: Object
  },
  data() {
    return {
      inputModel: ''
    };
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.postinput {

  background-color: gray;

  &__topbar {

  }

  &__inputs {

    &__post {

    }
  }

  &__controls {

    &-button {
      margin: 5px;
    }
  }
}

</style>
