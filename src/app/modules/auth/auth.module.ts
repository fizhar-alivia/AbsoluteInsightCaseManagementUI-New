import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components inside auth module
import { AuthComponent } from "../auth/auth.component";
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RedirectionComponent } from './redirection/redirection.component';


const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent,
				data: {returnUrl: window.location.pathname}
			},
			{
				path: 'forgot-password',
				component: ForgotPasswordComponent,
			},
			{
				path: 'redirecting',
				component: RedirectionComponent,
			}
		]
	}
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RedirectionComponent
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(routes),
	FormsModule
  ],
})

export class AuthModule { }
