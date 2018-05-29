<template>
  <div class="container">
    <div class="row top-buffer">
      <div class="col-md-4 offset-md-4 text-center">
        <h1><strong>eduBoard</strong></h1>
        <h3>Benutzerkonto anlegen</h3>
      </div>
    </div>
    <div class="row top-buffer">
      <div class="col-md-4 offset-md-4 text-left">
        <b-form action="POST">
          <div class="form-details">
            <b-form-group id="usernameLabel"
                          label="E-Mail-Adresse"
                          label-for="usernameInput">
              <b-form-input type="text"
                            name="username"
                            placeholder="user@example.com"
                            id="usernameInput">
              </b-form-input>
            </b-form-group>
            <b-form-group id="passwordLabel"
                          label="Passwort"
                          label-for="passwordInput">
              <b-form-input type="password"
                            name="password"
                            id="passwordInput">
              </b-form-input>
            </b-form-group>
          </div>
          <b-button type="submit"
                    class="form-btn btn-lg btn-block btn-dark"
                    onsubmit="">
            Registrieren
          </b-button>
        </b-form>
      </div>
    </div>
    <div class="row top-buffer">
      <div class="col-md-4 offset-md-4 text center">
        <p>
          Bereits registriert?
          <strong>
            <router-link to="/login" class="toLogin">Anmelden</router-link>
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};

</script>

<style>

.top-buffer {
  margin-top: 25px;
}

.toLogin {
  color: inherit;
}

</style>
