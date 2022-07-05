import { Chart } from "react-google-charts";

export const data = [
  ["equipamentos","equipamentos"],
  ["Notebook",50],
  ["Nobreak",50]
];

export const options = {
  title: "Equipamentos",
  sliceVisibilityThreshold: 0.2, // 20%
};

const PieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"90%"}
      height={"250px"}
    />
  );
};

export default PieChart;