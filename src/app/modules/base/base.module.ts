import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "./shared.module";

import { AuthGuard } from '../auth/_guards/auth.guard';

import { BaseComponent } from './base.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';
import { CaseListComponent } from './inner-components/case-list/case-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'List',
        component: CaseListComponent
      },
      {
        path: 'View',
        loadChildren: () => import('./inner-components/case-view/case-view.module').then(m => m.CaseViewModule)
      },
      {
        path: 'intakeForm',
        loadChildren: () => import('./inner-components/intake-form/intake-form.module').then(m => m.IntakeFormModule)
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
