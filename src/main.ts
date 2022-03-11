//bootstap for your choice of platform (i.e. browser, web worker, server )

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";


// bootstraps your entry point module to allow your choosen platform to start your application
platformBrowserDynamic().bootstrapModule(AppModule);
