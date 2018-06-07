<template>
  <div class="container auth">
    <div class="row top-buffer">
      <div class="col-md-6 offset-md-3 text-center">
        <h1 class="font-weight-bold">eduBoard</h1>
        <h2>{{subtitle}}</h2>
      </div>
    </div>
    <div class="row top-buffer">
      <div class="col-md-6 offset-md-3 text-left">
        <b-form action="POST">
          <div class="form-group form__item">
            <label class="form__text" for="emailInput">
              E-Mail-Adresse
            </label>
            <input class="form-control"
                   type="email"
                   placeholder="mail@beispiel.de"
                   id="emailInput">
          </div>
          <div class="form-group form__item">
            <label class="form__text" for="passwordInput">
              Passwort
            </label>
            <input class="form-control"
                   type="password"
                   placeholder="•••••••••"
                   id="passwordInput">
          </div>
          <div class="form-group form__item appear-later" v-if="action === 'register'">
            <label class="form__text" for="passwordRepeatInput">
              Passwort wiederholen
            </label>
            <input class="form-control"
                   type="password"
                   placeholder="•••••••••"
                   id="passwordRepeatInput">
          </div>
          <b-button type="button" class="font-weight-bold"
            @click="sendFormDataToServer()">{{button}}
          </b-button>
        </b-form>
      </div>
    </div>
    <div class="row top-buffer bottom__bottom">
      <div class="col-md-6 offset-md-3 text center">
        <p class="bottom">
          {{bottom}}
          <router-link class="bottom__link font-weight-bold"
            v-bind:to="'/' + otherUrl">
            {{cta}}
          </router-link>
        </p>
      </div>
    </div>
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
        if (res) {
          setTimeout(() => {
            this.$router.push('/dashboard');
          }, 500);
        }
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
    padding-top: 6%;
  }

  h1 {
    color: black;
    padding-top: 10%;
    padding-bottom: 5%;
  }

  h2 {
    padding-bottom: 6%;
  }

  input {
    outline: none;
    border-bottom: 1px solid black;
  }

  b-button {
    background-color: black;
    color: white;
    border: none;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 5%;
    cursor: pointer;
    text-align: center;
  }

  .bottom {
    color: #1f1f1f;
    &__link {
      color: black;
      padding-left: 50px;
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
