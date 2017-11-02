import { APP_INITIALIZER, FactoryProvider } from '@angular/core';
import { ConfigService } from './config.service';
import { APP_CONFIG_LOADER, ConfigLoaderInterface } from './loader';

// NOTE: THIS EXPORT REQUIRED TO MAKE AOT WORKS
export const appInitFactory = <T>(loader: ConfigLoaderInterface<T>, config: ConfigService<T>) => {
  return async (): Promise<void> => {
    config.set(await loader.load());
  };
};

export const configAppInitFactoryProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitFactory,
  deps: [APP_CONFIG_LOADER, ConfigService],
  multi: true,
};
