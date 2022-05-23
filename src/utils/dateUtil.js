export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

// returns the number of days in the month
export const daysInMonth = function (month, year) {
  return new Date(year, month + 1, 0).getDate();
};
// new Date(2022, 4 + 1, 0).getDate();
// in 2022, May(index 4) number of days = 31

// return the day for the date
export const monthDays = function (date) {
  return new Date(date).getDay();
};

// new Date(26-05-2022).getDay();
// returns 4, means Thursday ie:(4th index)
