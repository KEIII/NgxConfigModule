# NgxConfigModule
Provides Angular module to load the application configuration.

## Setup
Setup with build-in url loader:
```typescript
@NgModule({
  imports: [
    HttpClientModule,
    ConfigModule.withUrl(string),
  ]
})
export class AppModule {}
```

Or setup with custom loader what implements `ConfigLoaderInterface`
```typescript
@NgModule({
  imports: [
    ConfigModule.withLoader({provide: APP_CONFIG_LOADER, ...}),
  ]
})
export class AppModule {}
```

Now you can inject the `ConfigService` service into your components or services:
```typescript
@Injectable()
class Service {
  constructor(configService: ConfigService<AwesomeConfig>) {
    const config: AwesomeConfig = configService.get();
    this.stuff = config.stuff;
  }
}
```
