let d = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const currentDate = d.getDate();
const currentDay = d.getDay();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();

export const today =
  days[currentDay] +
  ' ' +
  currentDate +
  ' ' +
  months[currentMonth] +
  ' ' +
  currentYear;
