import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/_guards/auth.guard';
import { BaseComponent } from './modules/base/base.component';


const routes: Routes = [

  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },

  {
    path: '',
    canActivate: [AuthGuard],
    component: BaseComponent,
    children: [
			// {
			// 	path: 'dashboard',
			// 	loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      // },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
