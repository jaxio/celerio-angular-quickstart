import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import './rxjs-operators'; // Add the RxJS Observable operators we need in this app.
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
]).catch(err => console.error(err));
