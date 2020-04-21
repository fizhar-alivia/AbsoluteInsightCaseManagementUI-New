import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Component for showing case list
import { CaseListComponent } from './case-list/case-list.component';

const routes: Routes = [

  { 
    path: '', 
    component: CaseListComponent
  }

];

@NgModule({
  declarations: [CaseListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CaseListModule { }
