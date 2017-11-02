export class ConfigService<T> {
  private config: T;

  public set(config: T): void {
    this.config = config;
  }

  public get(): T {
    if (!this.config) {
      throw new Error('Could not find a config. Did you load it?');
    }

    return this.config;
  }
}
