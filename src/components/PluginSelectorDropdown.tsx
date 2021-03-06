import { BasePlugin, PluginManager } from "../plugins/PluginManager";
import React from "react";
import { Dropdown } from "./Dropdown";

export type PluginSelectorDropdown<P extends BasePlugin> = {
  label: string;
  pluginManager: PluginManager<P>;
  selectedPlugin: P;
  onChange: (plugin: P) => void;
};

export function PluginSelectorDropdown<P extends BasePlugin>(
  props: PluginSelectorDropdown<P>
) {
  const { pluginManager, selectedPlugin, onChange } = props;

  const dropdownItems = React.useMemo(() => {
    return pluginManager.getPluginsInOrder().map((p) => ({
      value: p.registrationKey,
      name: p.userVisibleName,
    }));
  }, [pluginManager]);

  const setSelectedPlugin = React.useCallback(
    (key: string) => onChange(pluginManager.getPluginByKey(key)!),
    [onChange, pluginManager]
  );

  return (
    <Dropdown
      label={props.label}
      items={dropdownItems}
      selectedValue={selectedPlugin.registrationKey}
      onChange={setSelectedPlugin}
    />
  );
}
