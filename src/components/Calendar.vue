<template>
<div class="calendar">
  <div v-for="(day, index) in getArray" :key="index" class="calendar__day">
    <p class="calendar__titles">{{dayNames[index]}}</p>
    <div v-for="(slot, index2) in day" :key="index2" class="calendar__slot">

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

  &__titles {
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &__day {
    width: 100%;
  }

  &__slot {
    height: 14.28%;
    width: 100%;

    border: 1px solid grey;
  }

}

</style>
