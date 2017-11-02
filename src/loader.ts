import { HttpClient } from '@angular/common/http';
import { ClassProvider, Inject, Injectable, InjectionToken } from '@angular/core';
import { APP_CONFIG_URL } from './url-provider';

export const APP_CONFIG_LOADER = new InjectionToken<string>('app.config_loader');

export interface ConfigLoaderInterface<T> {
  load(): Promise<T>;
}

@Injectable()
export class UrlConfigLoaderService<T> implements ConfigLoaderInterface<T> {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG_URL) private url: string,
  ) {}

  public async load(): Promise<T> {
    return await this.http
      .get(this.url)
      .retry(3)
      .toPromise<T>()
      .catch(err => {
        throw new Error(`Failed load config from the server! Error: ${err.message}`);
      });
  }
}

export const configLoaderProvider: ClassProvider = {
  provide: APP_CONFIG_LOADER,
  useClass: UrlConfigLoaderService,
};
