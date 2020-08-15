import { NumberWithWord } from "./NumberLanguagePlugins";
import { BasePlugin, PluginManager } from "./PluginManager";
import { GraphWithReactCharts } from "../graphPlugins/ReactCharts";
import { GraphWithChartJs } from "../graphPlugins/ChartJs";

export type GraphItems = (
  values: ReadonlyArray<NumberWithWord>
) => React.ReactElement;

export interface GraphPlugin extends BasePlugin {
  graphItems: GraphItems;
}

/*
 * Even more awesome chart library ideas here:
 * https://github.com/zingchart/awesome-charting
 */

export const GraphPluginManager = new PluginManager<GraphPlugin>(
  {
    registrationKey: "react-charts",
    userVisibleName: "react-charts (TanStack)",
    graphItems: GraphWithReactCharts,
  },
  {
    registrationKey: "react-charts-js",
    userVisibleName: "React Chart.js",
    graphItems: GraphWithChartJs,
  }
);
