import DateText from "./atom/Text/Specialization/DateText";
import DayText from "./atom/Text/Specialization/DayText";

function App() {
  return (
    <>
      <DateText text={"03.01"} />
      <DayText day={"토"} />
      <DayText day={"일"} />
    </>
  );
}

export default App;
