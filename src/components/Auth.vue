<template>
  <div class="container auth">
    <h1>eduBoard</h1>
    <h2>{{subtitle}}</h2>

    <form action="POST">

      <div class="form__item">
        <span class="form__text">E-Mail-Adresse</span>
        <input class="form__input" type="email" placeholder="mail@example.com">
      </div>
      <div class="form__item">
        <span class="form__text">Passwort</span>
        <input class="form__input" type="password" placeholder="•••••••••">
      </div>
      <div class="form__item" v-if="action === 'register'">
        <span class="form__text">Passwort wiederholen</span>
        <input class="form__input" type="password" placeholder="•••••••••">
      </div>

      <button type="button" class="font-weight-bold"
        @click="sendFormDataToServer()">{{button}}
      </button>
    </form>

    <p class="bottom">
      {{bottom}}
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
  // Daten die vom View zum Component übergeben werden
  props: {
    action: String,
    subtitle: String,
    bottom: String,
    cta: String,
    otherUrl: String,
    button: String,
  },
  // Daten die zu diesem Component gehören
  data() {
    return {
      // path: this.$route.path,
    };
  },
  // Funktionen die zu diesem Component gehören
  methods: {
    // Sendet den Request zum server
    sendFormDataToServer() {
      this.request('POST', `/api/v1/${this.action}`, (res) => {
        console.log(res);
        setTimeout(() => {
          this.$router.push('/dashboard');
        }, 500);
      });
    },
    /*
     * Request wrapper. Takes a callback and passes JSON response to it.
     * Catched non-JSON responses. Handling of success/failure is left to the callback
     */
    // TODO: Mach diese Funktion global, damit alle components sie verwenden können
    request(method, url, callback, body) {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function onResponse() {
        // If a JSON response
        if (this.readyState === 4 && req.responseText[0] === '{') {
          callback(JSON.parse(req.responseText));
        // If not a JSON response
        } else if (this.readyState === 4) {
          callback({
            success: false,
            status: this.status,
            msg: req.responseText,
          });
        }
      };
      req.open(method, url, true);
      if (typeof body !== 'undefined') {
        req.setRequestHeader('Content-Type', 'application/json');
      }
      req.send(body);
    },
  },
};
</script>

<style lang="scss" scoped>

  .auth {
    text-align: center;
    font-weight: 700 !important;
    text-decoration: none;
  }

  h1 {
    color: black;
    padding-top: 10%;
    padding-bottom: 2%;
  }

  form {
    padding: 7% 0;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &__item {

    }

    &__text {

    }

    &__input {
      height: 50%;
    }
  }

  button {
    background-color: black;
    color: white;
    border: none;
    padding: 1rem 5rem;
    max-width: 200px;
  }

  .bottom {
    color: #1f1f1f;
    &__link {
      color: black;
      padding-left: 50px;
    }
  }
</style>
