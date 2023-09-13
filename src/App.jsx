import "./App.css";
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Language", "Percent"],
    ["JavaScript", 57.85],
    ["TypeScript", 50.3],
    ["C#", 10.63],
    ["Dart", 4.96],
    ["Другой", 9.45],
  ];

  const options = {
    title: "На каком языке вы программируете? (Front-End)",
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}

export default App;
