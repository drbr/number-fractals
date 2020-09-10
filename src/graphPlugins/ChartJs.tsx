import * as React from "react";
import { GraphItems } from "../plugins/GraphPlugins";
import { Bar } from "react-chartjs-2";

export const GraphWithChartJs: GraphItems = function GraphWithReactCharts(
  data
) {
  // const numberWords = data.map((d) => d.numberAsWords);
  const values = data.map((d) => d.value);

  const chartData = {
    labels: values,
    datasets: [
      {
        label: "Numeric value",
        backgroundColor: "#A456CB",
        data: values,
        minBarLength: 10,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        animation: {
          duration: 0,
        },
      }}
      // width={100}
      // height={50}
      // options={{ maintainAspectRatio: false }}
    />
  );
};
