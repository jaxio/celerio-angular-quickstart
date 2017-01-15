import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
import './rxjs-operators'; // Add the RxJS Observable operators we need in this app.

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);