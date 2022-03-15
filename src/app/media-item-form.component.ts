import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  //class property for form with type of FormGroup (this is typescript)
  form: FormGroup;


  // lifecycle method makes it easier to unit test 
  ngOnInit() {
    // formGroup takes in an object literal 
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      // Validators.compose allows you to have more than one validator on a field
      name: new FormControl('', Validators.compose([
        // Validators are built-in Angular validators you can use in Forms
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      // custom validator used on line 26
      year: new FormControl('', this.yearValidator),
    });
  }

  
  // you can also create your own custom validator and use it in your form
  yearValidator(control: FormControl) {
    // check if value is empty; return null if empty
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
