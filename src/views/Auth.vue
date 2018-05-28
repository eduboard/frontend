<template>
  <div class="auth">
    <h1>eduBoard</h1>
    <h2>{{subtitle}}</h2>

    <form action="POST">

    </form>

    <p class="footer">
      {{footer}}
      <router-link v-bind:to="'/' + url">{{cta}}</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'auth',
  components: {},
  data: function data() {
    return {
      subtitle: 'Benutzerkonto anlegen',
      footer: 'Bereits registiert?',
      url: 'login',
      cta: 'Anmelden',
    };
  },
};

console.log(this);

</script>

<style></style>
