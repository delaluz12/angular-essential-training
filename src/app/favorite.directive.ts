import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[mwFavorite]",
})
export class FavoriteDirective {
  // Host-binding marks the DOM property choosen as a host-binding property & supplies configuration metadata; meaning it handles the changing of host element properties via the host bindings
  @HostBinding("class.is-favorite") isFavorite = true;

  @HostBinding("class.is-favorite-hovering") hovering = false;

  // handles responding to host element DOM events i.e 'click' or 'hovering'
  @HostListener("mouseenter") onMouseEnter() {
    this.hovering = true;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.hovering = false;
  }

  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
