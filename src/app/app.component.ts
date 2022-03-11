import { Component } from "@angular/core";

@Component({
  //selects where in the template it should be put
  // NOTE: when coming up with names you always want to add a dash (-) b/c W#C specs state that custom DOM elements should use at least one dash in name and since angular selectors support for new DOM elements you NEED to use at least one dash(-)
  selector: "app-root",
  //what in the template will be displayed can be actual template or a templateURL
  templateUrl: "./app.component.html",
  //adding styling to component === inside template literals you will write CSS or use styleURL that points to file that has styling
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
