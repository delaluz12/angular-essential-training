import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { newItemRouting } from "./new-item.routing";

@NgModule({
  imports: [
    // for all other non-root modules you will use the CommonModule to get access to the same core directives (ngIf, ngFor) as the BrowserModule provides
    CommonModule,
    ReactiveFormsModule,
    newItemRouting,
  ],
  declarations: [MediaItemFormComponent],
})
export class NewItemModule {}
