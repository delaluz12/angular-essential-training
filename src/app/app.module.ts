import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from './app.component'

// app root module
@NgModule ({
    //imports, declarations and bootstarp are all meta-data properties & can be setup as arrays
    //brings in other modules that your main module will need
    imports: [
        // browser based app ; module contains core directives and pipes for working with the DOM
        BrowserModule
    ],
    //used to makes components, directives and pipes avail to module that don't come from other module
    declarations: [
        AppComponent
    ],
    // root module to let angular know which components or component will be that starting point for bootstrap procsess === entry point for app code 
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}