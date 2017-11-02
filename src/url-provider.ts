// tslint:disable:only-arrow-functions

import { InjectionToken, ValueProvider } from '@angular/core';

export const APP_CONFIG_URL = new InjectionToken<string>('app.config_url');

// NOTE: DO NOT USE ARROW SYNTAX HERE TO MAKE AOT WORKS
export function configUrlProvider(url: string): ValueProvider {
  return {provide: APP_CONFIG_URL, useValue: url};
}
