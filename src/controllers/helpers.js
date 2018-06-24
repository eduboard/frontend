const h = {};

h.dayNames = ['MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG'];

h.parseCalendarString = function (str) {
  const meeting = str.split(',');
  const times = meeting[2].split('-').map(time =>
    Math.floor((time - 8) / 2));
  return {
    name: meeting[0],
    column: this.dayNames.indexOf(meeting[1].toUpperCase()),
    hrTime: meeting[2],
    row: times[0],
    size: times[1] - times[0],
    room: meeting[3],
    person: meeting[4]
  };
};

export default h;
