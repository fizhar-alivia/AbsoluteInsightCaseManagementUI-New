import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/_guards/auth.guard';

import { BaseComponent } from './base.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'List',
        loadChildren: () => import('./inner-components/case-list/case-list.module').then(m => m.CaseListModule)
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
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BaseModule { }
