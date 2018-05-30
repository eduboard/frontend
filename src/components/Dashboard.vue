<template>
  <div>
    <header class="controls">
      <div class="container controls__container">
        <div class="controls__container--large">
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
              <li class="controls__navigation__item"><a href="">Profil</a></li>
              <li class="controls__navigation__item"><a href="">Logout</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main class="container dashboard">
      <ul class="dashboard__courses">
        <li class="dashboard__course card new">
          <div class="card__content">
            <h3>Lineare Algebra II <span>2 ungelesene Nachrichten</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            suscipit, temporibus magni.</p>
            <strong>Zuletzt aktualisiert am 23. Mai 2018</strong>
          </div>

          <ul class="dashboard__course__files">
            <li class="dashboard__course__file">grundlagen.pdf<a href="a"></a></li>
            <li class="dashboard__course__file">lineare-gleichungssysteme.pdf<a href="b"></a></li>
            <li class="dashboard__course__file">determinanten.pdf<a href="c"></a></li>
            <li class="dashboard__course__file">eigenwerte.pdf<a href=""></a></li>
            <li class="dashboard__course__file">skalarprodukte.pdf<a href=""></a></li>
          </ul>

          <a href="" class="card__link"></a>
        </li>
        <li class="dashboard__course card">
          <div class="card__content">
            <h3>Lineare Algebra II</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            suscipit, temporibus magni.</p>
            <strong>Zuletzt aktualisiert am 23. Mai 2018</strong>
          </div>

          <ul class="dashboard__course__files">
            <li class="dashboard__course__file">grundlagen.pdf<a href="a"></a></li>
            <li class="dashboard__course__file">lineare-gleichungssysteme.pdf<a href="b"></a></li>
            <li class="dashboard__course__file">determinanten.pdf<a href="c"></a></li>
            <li class="dashboard__course__file">eigenwerte.pdf<a href=""></a></li>
            <li class="dashboard__course__file">skalarprodukte.pdf<a href=""></a></li>
          </ul>

          <a href="" class="card__link"></a>
        </li>
        <li class="dashboard__course card">
          <div class="card__content">
            <h3>Lineare Algebra II</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            suscipit, temporibus magni.</p>
            <strong>Zuletzt aktualisiert am 23. Mai 2018</strong>
          </div>

          <ul class="dashboard__course__files">
            <li class="dashboard__course__file">grundlagen.pdf<a href="a"></a></li>
            <li class="dashboard__course__file">lineare-gleichungssysteme.pdf<a href="b"></a></li>
            <li class="dashboard__course__file">determinanten.pdf<a href="c"></a></li>
            <li class="dashboard__course__file">eigenwerte.pdf<a href=""></a></li>
            <li class="dashboard__course__file">skalarprodukte.pdf<a href=""></a></li>
          </ul>

          <a href="" class="card__link"></a>
        </li>
      </ul>


      <aside class="dashboard__sidebar">
        <div class="dashboard__sidebar__search">
          <input type="text" placeholder="Nach Kursen suchen...">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path fill="none" stroke="#70808E" stroke-miterlimit="10" stroke-width=
            "4" d="M39.049 39.049L56 56" stroke-linejoin="round" stroke-linecap="
            round"></path>
            <circle cx="27" cy="27" r="17" fill="none" stroke="#70808E"
            stroke-miterlimit="10" stroke-width="4" stroke-linejoin="round"
            stroke-linecap="round"></circle>
          </svg>
        </div>

        <button class="dashboard__sidebar__all">Alle Kurse anzeigen</button>


        <h2>Nachrichten</h2>
        <ul class="dashboard__sidebar__messages">
          <li class="dashboard__sidebar__message card new">
            <div class="card__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <span>2 ungelesene Nachrichten</span>
            </div>
            <a href="" class="card__link"></a>
          </li>
          <li class="dashboard__sidebar__message card">
            <div class="card__content">
              <p>Odio ut inventore molestiae quaerat omnis, quisquam.</p>
              <span>Letzte Nachricht um 11:03</span>
            </div>
            <a href="" class="card__link"></a>
          </li>
          <li class="dashboard__sidebar__message card">
            <div class="card__content">
              <p>Dolore velit quas delectus quisquam reprehenderit a.</p>
              <span>Letzte Nachricht um 11:03</span>
            </div>
            <a href="" class="card__link"></a>
          </li>
        </ul>
      </aside>
    </main>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
};
</script>

<style></style>

