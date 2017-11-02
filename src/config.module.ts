import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { configAppInitFactoryProvider } from './app-init-provider';
import { ConfigService } from './config.service';
import { configLoaderProvider } from './loader';
import { configUrlProvider } from './url-provider';

@NgModule({})
export class ConfigModule {
  public static withUrl(url: string): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: [
        configUrlProvider(url),
        configLoaderProvider,
        ConfigService,
        configAppInitFactoryProvider,
      ],
    };
  }

  public static withLoader(loaderProvider: Provider): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: [
        loaderProvider,
        ConfigService,
        configAppInitFactoryProvider,
      ],
    };
  }
}
