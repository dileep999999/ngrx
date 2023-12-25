import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './auth/state/auth.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(appReducer),provideEffects([AuthEffects]), provideStoreDevtools({ logOnly: !isDevMode() }), provideHttpClient(withFetch())]
};
