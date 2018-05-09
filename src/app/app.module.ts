import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  // all the components, directives, and pipes need to be added in declarations
  declarations: [
    AppComponent,
    ProductComponent
  ],
  // BrowserModule to explicitly make angular work on browsers, since it can be run as a desktop applicaiton for example
  // FormsModule is for dealing with forms [()]
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // to bootstrap(start) the main(app) component
  bootstrap: [AppComponent]
})
export class AppModule { }
