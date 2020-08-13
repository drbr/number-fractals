type RegisteredPlugin<P> = {
  name: string;
  plugin: P;
};

export class PluginManager<P> {
  private registeredPlugins: RegisteredPlugin<P>[] = [];

  /**
   * Creates a new plugin manager, optionally registering the given plugins.
   * @param plugins
   */
  public constructor(plugins?: RegisteredPlugin<P>[]) {
    if (plugins) {
      this.registerPlugins(plugins);
    }
  }

  /**
   * Registers a plugin with this manager, appending it to the end of the list.
   * @param name Name of the plugin. Should be unique to all the plugins in this manager
   * @param plugin The plugin
   */
  public registerPlugin(name: string, plugin: P): void {
    if (this.getPluginByName(name)) {
      throw new Error(
        `Cannot register plugin; a plugin with name ${name} has already been registered.`
      );
    }
    this.registeredPlugins.push({ name, plugin });
  }

  /**
   * Registers multiple plugins, as if `registerPlugin` were called multiple times.
   * @param plugins
   */
  public registerPlugins(plugins: RegisteredPlugin<P>[]): void {
    for (const p of plugins) {
      this.registerPlugin(p.name, p.plugin);
    }
  }

  /**
   * Returns the names of all registered plugins, in the order in which they were registered
   */
  public getPluginNamesInOrder(): ReadonlyArray<string> {
    return this.registeredPlugins.map((p) => p.name);
  }

  public getPluginByName(name: string): P | undefined {
    const rp = this.registeredPlugins.find((p) => p.name === name);
    return rp?.plugin;
  }
}
