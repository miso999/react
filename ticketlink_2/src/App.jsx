import DateText from "./features/match/DateText";
import DayText from "./features/match/DayText";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <DateText month="02" day="26" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DayText date="(수)" />
          <DayText date="15:00" />
          {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
          {/* <DayText date="월"></DayText> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
