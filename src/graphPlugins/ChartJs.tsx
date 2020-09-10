import * as React from "react";
import { GraphProps } from "../plugins/GraphPlugins";
import { Bar } from "react-chartjs-2";

export const GraphWithChartJs: React.FC<GraphProps> = React.memo(
  function GraphWithReactCharts({ values }) {
    const numberWords = values.map((d) => d.numberAsWords);
    const numberValues = values.map((d) => d.value);

    const chartData = {
      labels: numberValues,
      datasets: [
        {
          label: "Numeric value",
          backgroundColor: "#A456CB",
          data: numberValues,
          minBarLength: 10,
        },
      ],
    };

    const axisOptions = {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    };

    const animationOptions = {
      duration: 0,
    };

    const tooltipOptions = {
      callbacks: {
        label: (tooltipItem: { index: number }) => {
          const word = numberWords[tooltipItem.index];
          return `${word}`;
        },
      },
    };

    return (
      <Bar
        data={chartData}
        options={{
          scales: axisOptions,
          animation: animationOptions,
          tooltips: tooltipOptions,
          maintainAspectRatio: false,
        }}
      />
    );
  }
);
