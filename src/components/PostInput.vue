<template>
  <div class="postinput">
    <h2 class="postinput__topbar">Neuen Post erstellen</h2>
<!--
    <div class="">
      <input class="postinput__title" type="text" placeholder="Titel des Posts..."
        v-model="title">
    </div>
-->
    <div class="">
      <textarea class="postinput__textarea" v-model="message" rows="8"
        cols="60" placeholder="Verfasse hier deinen Post..."></textarea>
    </div>

    <div class="postinput__files"></div>

    <div class="postinput__images"></div>

    <div class="postinput__controls">
      <button class="postinput__controls-button"
        @click="createPost">
      Absenden</button>
      <button class="postinput__controls-button">Dateien hinzufügen</button>
      <button class="postinput__controls-button">Bilder hinzufügen</button>
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
      title: '',
      message: ''
    };
  },
  methods: {
    createPost() {
      this.$api.createPost({
        message: this.message,
        courseId: this.target.id,
        date: new Date()
      });
    }
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.postinput {

  padding: 2rem 4rem;
  margin-top: 2rem;
  background-color: white;
  @include elevate(2);

  &:hover {

  }

  &__topbar {

    // text-align: center;

  }

  &__title {
    // border-bottom: 1px solid grey;
  }

  &__textarea {

    margin-top: 2rem;
    border: 0;
    background-color: inherit;
    outline: none;
    resize: none;

  }

  &__controls {

    &-button {
      margin: 5px;
    }
  }
}

</style>
