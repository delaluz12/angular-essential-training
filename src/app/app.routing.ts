import { Routes, RouterModule } from "@angular/router";
import { MediaItemListComponent } from "./media-item-list.component";

const appRoutes: Routes = [
  // the 'add' path exists on a root level but with lazy load function so only when that path is triggered does the app go to route and display that content
  {
    path: "add",
    loadChildren: () =>
      // import function returns a promise so use .then to resvolve promise and to return the NewItemModule
      import("./new-item/new-item.module").then((m) => m.NewItemModule),
  },
  { path: ":medium", component: MediaItemListComponent },
  { path: "", pathMatch: "full", redirectTo: "all" },
];

// registring the RouterModule with a call .forRoot that will be for the root app - sets up the initial route listerner and navigation setup
export const routing = RouterModule.forRoot(appRoutes);
