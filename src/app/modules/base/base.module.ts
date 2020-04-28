import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { BaseComponent } from './base.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
			{
				path: 'CaseList',
				loadChildren: () => import('./case-list/case-list.module').then(m => m.CaseListModule),
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
