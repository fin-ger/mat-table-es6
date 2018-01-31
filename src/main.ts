import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

// localStorage.clear();

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule, [{
    defaultEncapsulation: ViewEncapsulation.Emulated,
}]);
