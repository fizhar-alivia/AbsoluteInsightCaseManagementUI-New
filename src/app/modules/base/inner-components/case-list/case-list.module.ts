import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared.module";

import { CaseListComponent } from "./case-list.component";
import { TaRecommendationModalComponent } from './modals/ta-recommendation-modal/ta-recommendation-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CaseListComponent,
  }
];

@NgModule({
  declarations: [
    CaseListComponent,
    TaRecommendationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CaseListModule { }
