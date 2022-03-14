import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categoryList",
  pure: true,
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
      //sets up a local array to store unique category names found in each mediaItem using .forEach() and returns them as a string with values separated by comma
    const categories = [];
    mediaItems.forEach((mediaItem) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(", ");
  }
}
