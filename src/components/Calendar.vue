<template>
<div class="calendar">
  <div v-for="(day, index) in getArray" :key="index" class="calendar__day">
    <p class="calendar__titles">{{dayNames[index]}}</p>
    <div v-for="(slot, index2) in day" :key="index2" class="calendar__slot activity">
      WH C 335

      <div class="calendar__slot__detail">
        <strong>WH C 335</strong>
        <p>Besprechung der Hausaufgaben</p>
        <p>Tutor Boi</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'calendar',
  props: {
    // entries: Array
  },
  data() {
    return {
      dayNames: ['montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag'],
      meetings: ['Cooles Lernen,Montag,14-16,MA 700',
        'Besprechung,Dienstag,8-12,HA 105']
    };
  },
  computed: {
    getArray() {
      const dates = [];
      for (let i = 0; i < this.meetings.length; i++) {
        dates[i] = this.meetings[i].split(',');
        dates[i][1] = this.dayNames.indexOf(dates[i][1].toLowerCase());
        const times = dates[i][2].split('-');
        dates[i][2] = `${times[0] - 8}-${times[1] - 8}`;
      }

      const days = [];
      for (let i = 0; i < 5; i++) {
        const slots = [];
        for (let j = 0; j < 7; j++) {
          slots.push('');
        }
        days.push(slots);
      }
      console.log(dates);
      return days;
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
      background: $color-bg;
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

}

</style>
