import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/_guards/auth.guard';
import { ErrorPageComponent } from "../app/common-components/error-page/error-page.component";

const routes: Routes = [

  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },

  {
    path: '',
    loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule),
  },

  {
    path: 'error/404',
    component: ErrorPageComponent,
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
