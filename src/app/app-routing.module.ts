import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/_guards/auth.guard';
import { BaseComponent } from './modules/base/base.component';
import { PageNotFoundComponent } from "./modules/base/common-components/error-pages/page-not-found/page-not-found.component";

const routes: Routes = [

  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },

  {
    path: '',
    canActivate: [AuthGuard],
    component: BaseComponent,
    children: [
			{
				path: 'CaseList',
				loadChildren: () => import('./modules/base/case-list/case-list.module').then(m => m.CaseListModule),
      },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]
  },

  {
    path: 'error/404',
    component: PageNotFoundComponent,
    data: {
      type: 'error-v6',
      code: 404,
      title: '404... Page Not Found',
      desc: 'Looks like you have entered a wrong url',
    },
  },

  {path: '**', redirectTo: 'error/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
