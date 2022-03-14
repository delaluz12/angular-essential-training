import { Component } from "@angular/core";

@Component({
  selector: "mw-app",
  templateUrl: "./app.component.html",
  // can also be an array of string that has actual css written in it
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // parent component data that want to share with child components == use @Input() decorator in component that you want to use it in
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
  };

  //add onMediaDeleteMethod from HTML template to handle the event emitter; since expecting it to return an object we can add param to the signature
  onMediaItemDelete(mediaItem) {};
}
