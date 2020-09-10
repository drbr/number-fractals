import { NumberWithWord } from "./NumberLanguagePlugins";
import { BasePlugin, PluginManager } from "./PluginManager";
import { GraphWithReactCharts } from "../graphPlugins/ReactCharts";
import { GraphWithChartJs } from "../graphPlugins/ChartJs";

export type GraphProps = {
  values: ReadonlyArray<NumberWithWord>;
};

export interface GraphPlugin extends BasePlugin {
  graphComponent: React.FC<GraphProps>;
}

/*
 * Even more awesome chart library ideas here:
 * https://github.com/zingchart/awesome-charting
 */

export const GraphPluginManager = new PluginManager<GraphPlugin>(
  {
    registrationKey: "react-charts-js",
    userVisibleName: "React Chart.js",
    graphComponent: GraphWithChartJs,
  },
  {
    registrationKey: "react-charts",
    userVisibleName: "react-charts (TanStack)",
    graphComponent: GraphWithReactCharts,
  }
);
