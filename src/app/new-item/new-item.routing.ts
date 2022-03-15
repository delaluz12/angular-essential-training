import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";

// changing path to an empty string so that when the module is routed to and since there is no additonal path piece the route will match and render the MediaItemComponent; if we had left path set to 'add' then it would have routed to '/add/add' since we included  path 'add' in the root router to add the lazy loading for the new-item feature
const newItemRoutes: Routes = [{ path: "", component: MediaItemFormComponent }];

// since this is a feature of our app we do not have to register the RouterModule with call to .forRoot since we don't want it to do any of the inital route lsitening or navigation that it does at the root of the app - so we call it using the .forChild
export const newItemRouting = RouterModule.forChild(newItemRoutes);
