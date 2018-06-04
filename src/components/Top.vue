<template>
    <div class="controls controls__container">
      <div class="container controls__container--large">
        <h1 class="controls__logo">eduBoard</h1>
        <nav class="controls__navigation">
          <ul>
            <li class="controls__navigation__item active"><a href="">Dashboard</a></li>
            <li class="controls__navigation__item"><a href="">Impressum</a></li>
            <li class="controls__navigation__item"><a href="">Hilfe</a></li>
          </ul>
        </nav>
      </div>

      <div class="controls__container--small">
        <div class="controls__user">
          <span class="controls__user__name">Annabelle bauer</span>
          <div class="controls__user__image">AB</div>
        </div>

        <nav class="controls__navigation">
          <ul>
            <li class="controls__navigation__item"><a>Profil</a></li>
            <li class="controls__navigation__item"><a>Logout</a></li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  name: 'top',
  // Daten die vom View zum Component übergeben werden
  props: {
  },
  // Daten die zu diesem Component gehören
  data() {
    return {
      // path: this.$route.path,
    };
  },
  // Funktionen die zu diesem Component gehören
  methods: {
    logout() {
      console.log('Logged out');
      this.request('POST', '/api/v1/logout', (res) => {
        console.log(res);
        setTimeout(() => {
          this.$router.push('/');
        }, 500);
      });
    },
    profile() {
      console.log('Clicked profile');
    },
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

<style lang="scss">

</style>
