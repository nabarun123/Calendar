import { CHANGE_MONTH } from "../actions/calendarAction";
import {
  selectedYear,
  selectedMonth,
  daysInMonth,
  monthDays,
} from "../utils/dateUtil";
import { getDays } from "../utils/calendarUtils";

const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
const endDate = daysInMonth(selectedMonth, selectedYear);

const initialState = {
  startDay,
  endDate,
  selectedMonth,
  selectedYear,
  days: getDays(startDay, endDate),
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      const { selectedMonth, selectedYear } = action.payload;
      const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
      const endDate = daysInMonth(selectedMonth, selectedYear);
      const days = getDays(startDay, endDate);
      return { ...state, selectedMonth, selectedYear, days, startDay, endDate };
    default:
      return state;
  }
};
