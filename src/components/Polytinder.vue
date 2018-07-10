<template>
  <div class="participantsearch">

    <Searchbar class="participantsearch__search" filler="Nach Teilnehmern suchen..."
      v-on:text="searchText = $event"
    ></Searchbar>

    <ul class="participantsearch__participants">

      <li v-for="participant in allParticipants"
        :key="participant.id" class="participantsearch__participant card">

        <div class="card__content">
          <h3>{{participant.name}} {{participant.surname}}</h3>
          <!-- <p>{{participant.description.slice(0, 100)}}</p> -->
          <button class="button">Hinzufügen</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue';

export default {
  name: 'search',
  components: {
    Searchbar
  },
  data() {
    return {
      searchText: ''
    };
  },
  computed: {
    // TODO: Wechsel zu spezifischen usern für den Kurs
    allParticipants() {
      return this.$store.getters.getParticipantsOfCourseFiltered(this.searchText);
    }
  }
};
</script>


<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.participantsearch {

  padding: 2rem 4rem;
  margin-top: 2rem;
  background-color: white;
  @include elevate(2);

  &__search {
    font-size: 1.25rem;
    margin: 2rem 1rem;

    @include break(laptop) {
      font-size: 2rem;
    }
  }

  &__participants {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__participant {
    // min-width: 420px;
    flex: 0 0 100%;

    @include break(mobile) {
      flex-basis: calc(#{(100% / 2)} - #{$spacing-x-small * 2});
      margin: 0 $spacing-x-small ($spacing-x-small * 2);
    }

    @include break(tablet-l) {
      margin: 0 $spacing-base ($spacing-base * 2);
      flex-basis: calc(#{(100% / 3)} - #{$spacing-base * 2});
    }

    @include break(desktop) {
      flex-basis: calc(#{(100% / 4)} - #{$spacing-base * 2});
    }
  }
}

</style>
