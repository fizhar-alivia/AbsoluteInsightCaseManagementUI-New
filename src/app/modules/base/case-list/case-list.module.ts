import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

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
    RouterModule.forChild(routes),
    DataTablesModule
  ],
  exports: [RouterModule]
})
export class CaseListModule { }
