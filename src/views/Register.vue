<!-- This is a wrapper for the Auth component -->
<template>
  <Auth
    action="register"
    subtitle="Willkommen zurück"
    bottom="Bereits registriert?"
    cta="Anmelden"
    otherUrl="login"
    button="Registrieren"
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
