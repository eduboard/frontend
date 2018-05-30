<!-- This is a wrapper for the Auth component -->
<template>
  <Auth
    action="login"
    subtitle="Willkommen zurück"
    bottom="Noch nicht registriert?"
    cta="Benutzerkonto anlegen"
    otherUrl="register"
    button="Anmelden"
  ></Auth>
</template>

<script>

import Auth from '../components/Auth.vue';

export default {
  components: {
    Auth,
  },
};

</script>
