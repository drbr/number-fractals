import * as React from "react";
import { GraphItems } from "../plugins/GraphPlugins";
import { Bar } from "react-chartjs-2";

export const GraphWithChartJs: GraphItems = function GraphWithReactCharts(
  values
) {
  return (
    <Bar
      data={values}
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
    />
  );
};
