<template>
  <div class="container ">
    <div id="PictureWrapper" class="container -narrow auth profile__picture">
     <div class="controls__user__image profile__picture__content">
        <p v-if="$store.state.user.email">
        {{$store.state.user.name.slice(0,1) + $store.state.user.surname.slice(0,1)}}
        </p>
     </div>
    </div>
    <div class="container -narrow auth">
    <form class="form" action="POST" v-on:submit.prevent="">
      <div class="form__item">
        <input class="form__input"
               type="email"
               placeholder="mail@beispiel.de"
               v-model="email"
               autofocus>
        <label class="form__text" for="emailInput">E-Mail-Adresse</label>
      </div>
      <div class="form__item">
        <input class="form__input"
               type="password"
               placeholder="•••••••••"
               v-model="password">
        <label class="form__text" for="passwordInput">Passwort</label>
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
  data() {
    return {
      password: '',
      email: ''
    };
  }
};


</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.profile {

  &__picture {
    align-items: center;

    &__content {
      align-items: center;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
}

</style>
