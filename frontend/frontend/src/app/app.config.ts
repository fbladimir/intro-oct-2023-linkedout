import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { reducers } from "./state";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { CounterFeature } from "./state/counter";
import { CounterEffects } from "./state/counter.effects";
import { provideEffects } from "@ngrx/effects";
import { provideHttpClient } from "@angular/common/http";
import { CounterEffects } from "./state/counter.effects";
import { provideEffects } from "@ngrx/effects";
import { provideHttpClient } from "@angular/common/http";
import { authconfig } from "./state/auth.config";
import { provideAuth } from "angular-auth-oidc-client";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers), // we can inject Store, and sets up an empty application state
    provideAuth(authconfig), 
    provideState(CounterFeature), //
    provideEffects([CounterEffects]),
    provideHttpClient(),
    provideStoreDevtools(),
  ],
};