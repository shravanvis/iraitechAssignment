import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormarrayComponent } from './formarray/formarray.component';
import { Question1Component } from './question1/question1/question1.component';
import { Comp5Component } from './question4/comp5/comp5.component';

const routes: Routes = [
  {
    path: 'comp5', component: Comp5Component
  },
  {
    path: 'formarray', component: FormarrayComponent
  },
  {
    path: 'question1', component: Question1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
