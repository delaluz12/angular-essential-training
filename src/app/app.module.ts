import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  //component(s) that should be used when starting/initalizing the applciation
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
