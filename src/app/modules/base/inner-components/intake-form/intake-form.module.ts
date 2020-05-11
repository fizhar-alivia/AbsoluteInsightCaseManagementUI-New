import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { IntakeFormComponent } from "./intake-form.component";

const routes: Routes = [
  {
    path: '',
    component: IntakeFormComponent,
  }
];

@NgModule({
  declarations: [
    IntakeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IntakeFormModule { }
