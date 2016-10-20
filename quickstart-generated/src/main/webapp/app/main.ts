import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import './rxjs-operators'; // Add the RxJS Observable operators we need in this app.

platformBrowserDynamic().bootstrapModule(AppModule);
