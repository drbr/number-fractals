import { BasePlugin, PluginManager } from "./PluginManager";

export interface SortPlugin<T> extends BasePlugin {
  sortItemsInPlace: (items: T[], getNumber: (t: T) => number) => T[];
}

export const SortPluginManager = new PluginManager<SortPlugin<unknown>>(
  {
    registrationKey: "asc",
    userVisibleName: "Ascending",
    sortItemsInPlace: sortAscending,
  },
  {
    registrationKey: "desc",
    userVisibleName: "Descending",
    sortItemsInPlace: sortDescending,
  }
);

function sortAscending<T>(items: T[], getNumber: (t: T) => number): T[] {
  items.sort((a, z) => getNumber(a) - getNumber(z));
  return items;
}

function sortDescending<T>(items: T[], getNumber: (t: T) => number): T[] {
  items.sort((a, z) => getNumber(z) - getNumber(a));
  return items;
}
