<template>
  <div class="container ">
    <div class="">
      <h2>Hier kannst Du Deine Profileinstellungen ändern:</h2>
    </div>
    <div id="PictureWrapper" class="container -narrow auth" style="align-items:center;">
           <div class="controls__user__image" style="align-items:center; width:200px; height:200px; border-radius:50%;" v-on:click="show('Hier kannst du in Zukunft Dein Bild bearbeiten')">
            {{user.name.slice(0,1) + user.surname.slice(0,1)}}
           </div>
    </div>
    <div class="container -narrow auth"  > <!-- pw und email ändern -->
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
        @click="evaluateAction()">Änderungen speichern</button>
    </form>

    </div>

  </div>
</template>

<script>

export default {
  components: {},
  name: 'profile',
  methods: {
    show(msg) {
        this.$alert.show(msg);
    }
  }
};


</script>

<style>
</style>
