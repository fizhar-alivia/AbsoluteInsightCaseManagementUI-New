import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { CaseViewComponent } from "./case-view.component";

const routes: Routes = [
  {
    path: '',
    component: CaseViewComponent,
  }
];


@NgModule({
  declarations: [
    CaseViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CaseViewModule { }
