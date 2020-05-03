import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { BaseComponent } from './base.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { CaseListComponent } from './inner-components/case-list/case-list.component';
import { GenericGridComponent } from "./common-components/grids/generic-grid/generic-grid.component";

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
  exports:[
    RouterModule
  ]
})
export class BaseModule { }
