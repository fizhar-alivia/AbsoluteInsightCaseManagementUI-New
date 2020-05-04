import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AuthGuard } from '../auth/_guards/auth.guard';

import { BaseComponent } from './base.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';
import { CaseListComponent } from './inner-components/case-list/case-list.component';
import { GenericGridComponent } from "./common-components/grids/generic-grid/generic-grid.component";
import { CaseViewComponent } from './inner-components/case-view/case-view.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'CaseList',
        component: CaseListComponent
      },
      {
        path: 'caseView',
        component: CaseViewComponent
      },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]
  },
];


@NgModule({
  declarations: [
    BaseComponent,
    SideNavComponent,
    HeaderComponent,
    CaseListComponent,
    GenericGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule.forRoot()
  ],
  exports: [
    RouterModule
  ]
})
export class BaseModule { }
