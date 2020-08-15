import { BasePlugin, PluginManager } from "./PluginManager";
import { NumberWithWord } from "./NumberLanguagePlugins";

export interface SortPlugin extends BasePlugin {
  sortItemsInPlace: (items: NumberWithWord[]) => NumberWithWord[];
}

export const SortPluginManager = new PluginManager<SortPlugin>(
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

function sortAscending(items: NumberWithWord[]): NumberWithWord[] {
  items.sort((a, z) =>
    a.numberAsWords < z.numberAsWords
      ? -1
      : a.numberAsWords > z.numberAsWords
      ? 1
      : 0
  );
  return items;
}

function sortDescending(items: NumberWithWord[]): NumberWithWord[] {
  items.sort((a, z) =>
    a.numberAsWords < z.numberAsWords
      ? 1
      : a.numberAsWords > z.numberAsWords
      ? -1
      : 0
  );
  return items;
}
