import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mw-media-item",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"],
})
export class MediaItemComponent {
  // create new class property for component & decorate it with @Input decorator to bind==tells angular to support property bindings of any instances of the MediaItemComponent  where the property name is mediaItem
  @Input() mediaItem;

  // @Output decortor allows exposing of event bindings on components; for example can use to provide notifications of a delete request from someone pressing the 'remove' btn on your app
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log("delete");
    // emit event from the output decorator when onDelete method is triggered from HTMl template
    // EventEmitters have a method called 'emit' ; this method expects an agrument that represents the data we can send back (can pass in null if we have nothing) if deleting could be helpful to have it send back the data requesting to be deleted
    this.delete.emit(this.mediaItem);
  }
}
