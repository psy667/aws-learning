import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {API, PubSub} from 'aws-amplify';
import awsconfig from './aws-exports';

if (environment.production) {
  enableProdMode();
}

API.configure(awsconfig);
PubSub.configure(awsconfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
