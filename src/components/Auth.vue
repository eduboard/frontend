<template>
  <div class="container auth">
    <div class="title">
      <h1 class="">eduBoard</h1>
      <h2>{{subtitle}}</h2>
    </div>
    <form class="form" action="POST">
      <div class="form__item">
        <label class="form__text" for="emailInput">
          E-Mail-Adresse
        </label>
        <input class="form__input"
               type="email"
               placeholder="mail@beispiel.de"
               id="emailInput"
               v-model="email"
               autofocus>
      </div>
      <div class="form__item">
        <label class="form__text" for="passwordInput">
          Passwort
        </label>
        <input class="form__input"
               type="password"
               placeholder="•••••••••"
               id="passwordInput"
               v-model="password">
      </div>
      <div class="form__item appear-later" v-if="action === 'register'">
        <label class="form__text" for="passwordRepeatInput">
          Passwort wiederholen
        </label>
        <input class="form__input"
               type="password"
               placeholder="•••••••••"
               id="passwordRepeatInput">
      </div>
      <button type="submit" class="form__button"
        @click="sendFormDataToServer()">{{button}}
      </button>
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
    sendFormDataToServer() {
      this.$api.request('POST', `/api/${this.action}`, (res) => {
        if (res.success !== false) {
          console.log(res);
          this.$store.commit('user', res);
          this.$router.push('/dashboard');
        }
      }, JSON.stringify({
        email: this.email,
        password: this.password
      }));
    },
  },
};
</script>

<style lang="scss" scoped>

@import "../styles/form";

.auth {
  text-align: center;
  font-weight: 700 !important;
  text-decoration: none;
  padding-top: 5%;
  max-width: 500px;
}

.title {
  padding-bottom: 5%;
}

h1 {
  margin: 0;
}

h2 {
  margin: 0;
}

input {
  color: black;
}

.bottom {
  color: #1f1f1f;

  &__text {
    display: inline-block;
  }

  &__link {
    color: black;
    padding-left: 50px;
    display: inline-block;
  }

  &__bottom {
    padding-top: 5%;
  }
}

.top-buffer {
  margin-top: 25px;
}


@keyframes slideIn {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.appear-later {
  transition: 1s ease-out 0s 1 slideIn;
  // position: relative;
}


</style>
