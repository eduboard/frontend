<template>
  <div class="container ">
    <div id="PictureWrapper" class="container -narrow auth profile__picture">
      <div class="controls__user__image profile__picture__content">
        <p v-if="$store.state.user.email">
        {{$store.state.user.name.slice(0,1) + $store.state.user.surname.slice(0,1)}}
        </p>
        <label class="profile__fileupload__label" for="fileupload">Upload picture</label>
      </div>
    </div>
    <div class="container -narrow auth">
    <form class="profile__form form" action="POST" v-on:submit.prevent="">
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

    <input class="profile__fileupload__input" type="file" id="fileupload">

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

    &.container {
      margin-top: 2rem;
    }

    &__content {
      margin: 0 auto;
      align-items: center;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: relative;
    }
  }

  &__form {
    margin-top: 2rem;
  }

  &__fileupload {

    &__input {
      position: absolute;
      opacity: 0;
      left: -999999px;
    }

    &__label {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      border-radius: 50%;
      right: 0;
      bottom: 0;
      left: 0;
      cursor: pointer;
      background: rgba(0,0,0,0.5);
      color: white;
      opacity: 0;

      &:hover {
        opacity: 1;
      }
    }
  }
}

</style>
