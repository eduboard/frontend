<template>
<div class="calendar">

  <!-- Time Listing -->
  <div class="calendar__day -small">
    <div v-for="(slot, index3) in 7" :key="index3 + 5000"
      class="calendar__times calendar__slot">
      {{index3 * 2 + 8}}
    </div>
  </div>

  <!-- Loop over days -->
  <div v-for="(day, index) in getArray" :key="index" class="calendar__day">

    <!-- Display the weekday -->
    <p class="calendar__titles">{{$helpers.dayNames[index]}}</p>

    <!-- Loop over columns -->
    <div v-for="(slot, index2) in day" :key="index2" class="calendar__slot"
      :class="{ activity: slot.room }">

      <!-- Display the tile information if it exists -->
      <router-link v-if="slot.room"
      :to="slot.coursename && `/courses/${findCourseIdByName(slot.coursename)}`">

        <!-- Hover information -->
        {{!showRooms ? (slot.coursename || slot.room) : slot.room}}
        <div class="calendar__slot__detail">
          <strong>{{slot.room}}</strong>
          <p>{{slot.name}}</p>
          <p>{{slot.person}}</p>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'calendar',
  props: {
    meetings: Array,
    showRooms: Boolean
  },
  methods: {
    findCourseIdByName(name) {
      const course = this.$store.state.courses.find(c => c.title === name);
      return course && course.id || '#';
    }
  },
  computed: {
    getArray() {
      if (!this.meetings) return [];

      // Generate a 5x7 Matrix
      const columns = [];
      for (let i = 0; i < 5; i++) {
        const rows = [];
        for (let j = 0; j < 7; j++) {
          rows.push({});
        }
        columns.push(rows);
      }

      // Place the entries at the right indexes
      for (let i = 0; i < this.meetings.length; i++) {
        for (let j = 0; j < this.meetings[i].size; j++) {
          columns[this.meetings[i].column][this.meetings[i].row + j] =
            this.meetings[i];
        }
      }

      return columns;
    }
  }
};
</script>

<style lang="scss">

@import "../styles/utility";
@import "../styles/ui/container";
@import "../styles/settings";

.calendar {
  display: flex;
  position: relative;

  &__titles {
    align-items: flex-end;
    justify-content: center;
    display: flex;
    border-bottom: 1px solid $color-soft;
    color: $color-text;
    flex: 0 0 (100% / 8);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    padding-bottom: 0.5em;
    text-transform: capitalize;
    margin-top: 0;
    font-size: $fs-xx-small;

    @include break(mobile) {
      font-size: $fs-x-small;
    }

    @include break(tablet) {
      font-size: $fs-small;
    }
  }

  &__day {
    display: flex;
    flex-direction: column;
    margin-right: -1px;
    width: 100%;
    justify-content: flex-end;

    &.-small {
      width: auto;
    }
  }

  &__slot {
    background: $color-bg;
    cursor: default;
    flex: 0 0 (100% / 8);
    width: 100%;
    margin-bottom: -1px;
    border: 1px solid $color-soft;
    user-select: none;
    font-size: $fs-xx-small;

    @include break(mobile) {
      font-size: $fs-x-small;
    }

    @include break(tablet) {
      font-size: $fs-small;
    }

    @include break(desktop) {
      position: relative;

    }


    &.activity {
      align-items: center;
      background: rgba($color-ui, 0.2);
      border: 1px solid rgba($color-ui, 0.2);
      color: $color-ui;
      display: flex;
      font-weight: bold;
      justify-content: center;
      z-index: 10;
    }


    &__detail {
      background: $color-base;
      @include elevate(10);
      display: none;
      top: 50%;
      left: 50%;
      font-weight: normal;
      position: absolute;
      transform: translate(-50%, -50%);
      padding: $spacing-base;
      pointer-events: none;
      user-select: none;
      z-index: 30;


      @include break(desktop) {
        min-width: 100%;
        min-height: 100%;
      }

      @include break(hd) {
        min-width: 150%;
      }


      p {
        margin-bottom: 0.25em;
        margin-top: 0.25em;
      }
    }

    &:hover {
      z-index: 900;
    }

    &:hover &__detail {
      display: block;
    }
  }

  &__times {
    color: $color-text;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    border: 0;
    margin-right: 1px;
    padding-right: 0.5em;

    &:hover {
      z-index: initial;
    }
  }

}

</style>
