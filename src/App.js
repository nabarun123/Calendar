import "./App.css";
import store from "./store/store";
import Calendar from "./component/calendar/Calendar";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}

export default App;
