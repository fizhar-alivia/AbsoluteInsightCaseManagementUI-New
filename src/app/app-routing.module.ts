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
			{
				path: 'CaseList',
				loadChildren: () => import('./modules/base/case-list/case-list.module').then(m => m.CaseListModule),
      },
      // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
