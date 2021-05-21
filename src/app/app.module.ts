import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './question4/comp1/comp1.component';
import { Comp2Component } from './question4/comp2/comp2.component';
import { Comp3Component } from './question4/comp3/comp3.component';
import { Comp4Component } from './question4/comp4/comp4.component';
import { Comp5Component } from './question4/comp5/comp5.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Question1Component } from './question1/question1/question1.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    FormarrayComponent,
    Question1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
