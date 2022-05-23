import { connect } from "react-redux";
import { MONTH_LIST } from "../../constant/calendar";
import { CHANGE_MONTH } from "../../actions/calendarAction";
// change month functionality

function Calendar(props) {
  const changeMonth = (arrow) => {
    let selectedMonth;
    let selectedYear;

    if (arrow === "LEFT") {
      if (props.selectedMonth === 0) {
        selectedMonth = 11;
        selectedYear = props.selectedYear - 1;
      } else {
        selectedMonth = props.selectedMonth - 1;
        selectedYear = props.selectedYear;
      }
    } else if (arrow === "RIGHT") {
      if (props.selectedMonth === 11) {
        selectedMonth = 0;
        selectedYear = props.selectedYear + 1;
      } else {
        selectedMonth = props.selectedMonth + 1;
        selectedYear = props.selectedYear;
      }
    } else {
      selectedMonth = props.selectedMonth + 1;
      selectedYear = props.selectedYear;
    }

    props.dispatch({
      type: CHANGE_MONTH,
      payload: {
        selectedYear,
        selectedMonth,
      },
    });
  };

  return (
    <div className="calender-container">
      <div className="calender-inner-container">
        <h1 style={{ color: "white" }}>Calendar</h1>
        <div id="calender-display">
          <div className="month-header">
            <div className="left-arrow" onClick={() => changeMonth("LEFT")}>
              {"<"}
            </div>
            <div id="month">
              {MONTH_LIST[props.selectedMonth]}, {props.selectedYear}
            </div>
            <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>
              {">"}
            </div>
          </div>
          <div className="calender-container-child">
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
          <div className="calender-container-child">
            {props.days.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    startDay: state.startDay,
    endDate: state.endDate,
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear,
    days: state.days,
  };
};
// (ui component -> state values)(all the reducer functions)

export default connect(mapStatetoProps)(Calendar);
// we can use useSelector also
