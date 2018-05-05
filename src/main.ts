import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// here we bootstrap the main(app) module for the application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
