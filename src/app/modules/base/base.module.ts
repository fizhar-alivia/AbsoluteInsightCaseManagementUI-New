import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "./shared.module";

import { BaseComponent } from './base.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { CaseListComponent } from './inner-components/case-list/case-list.component';

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
        loadChildren: () => import('./inner-components/case-view/case-view.module').then(m => m.CaseViewModule)
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
    CaseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class BaseModule { }
