<template>
  <div class="container -narrow auth">
    <div class="title">
      <h2>{{subtitle}}</h2>
    </div>
    <form class="form" action="POST" v-on:submit.prevent="">
      <div class="form__item">
        <input class="form__input"
               type="email"
               placeholder="mail@beispiel.de"
               id="emailInput"
               v-model="email"
               autofocus>
        <label class="form__text" for="emailInput">E-Mail-Adresse</label>
      </div>
      <div class="form__item">
        <input class="form__input"
               type="password"
               placeholder="•••••••••"
               id="passwordInput"
               v-model="password">
        <label class="form__text" for="passwordInput">Passwort</label>
      </div>
      <div class="form__item appear-later" v-if="action === 'register'">
        <input class="form__input"
               type="password"
               placeholder="•••••••••"
               id="passwordRepeatInput">
        <label class="form__text" for="passwordRepeatInput">Passwort wiederholen</label>
      </div>
      <button type="submit" class="form__button"
        @click="evaluateAction()">{{button}} </button>
    </form>
    <p class="bottom">
      <span class="bottom__text">
        {{bottom}}
      </span>
      <router-link class="bottom__link font-weight-bold"
        v-bind:to="'/' + otherUrl">
        {{cta}}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'auth',
  props: {
    action: String,
    subtitle: String,
    bottom: String,
    cta: String,
    otherUrl: String,
    button: String,
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    // Sendet den Request zum server
    evaluateAction() {
      this.$api.auth(this.action, {
        email: this.email,
        password: this.password
      });
    },
  },
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.auth {
  margin-top: 8rem;
  padding-bottom: 10rem;
}

</style>
