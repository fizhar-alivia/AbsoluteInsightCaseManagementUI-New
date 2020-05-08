import { Component, OnInit } from '@angular/core';
import { Md5 } from "md5-typescript";
import { AuthService } from 'src/app/_services/auth.service';
import { UserInfoService } from 'src/app/_services/user-info.service';
import { Router } from "@angular/router";

declare const principalDataURL: any;
declare const userSecurityInfoURL: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailInput: any;
  passwordInput: any;
  wrong_credentials: boolean = false;

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('tokens')) {
      this.router.navigate(['/CaseList']);
    }
  }

  login() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('username', this.emailInput);
    urlSearchParams.set('password', Md5.init(this.passwordInput));

    this.authService.login(urlSearchParams.toString()).subscribe(
      data => {
        if (data['access_token']) {
          localStorage.setItem('tokens', JSON.stringify(data));
          this.getPrincipalData();
          this.getUserSecurityInfo();
        }
      },
      error => {
        if (error.status === 401) {
          this.wrong_credentials = true;
        }        
      }
    )
  }

  getPrincipalData() {
    this.authService.getRequest(principalDataURL).subscribe(
      data => {
        let loggedUser: any = data;
        loggedUser = loggedUser.userAuthentication.details.principal.user;
				let user: any = {};
				user.firstName = loggedUser.firstName;
				user.lastName = loggedUser.lastName;
        user.userId = loggedUser.userId;
        this.userInfoService.userDetail = user;
        localStorage.setItem('userInfo', JSON.stringify(user));
      }
    )
  }

  getUserSecurityInfo() {
    this.authService.getRequest(userSecurityInfoURL).subscribe(
      data => {
        this.userInfoService.userSecurityInfo = data;
        localStorage.setItem('userSecurityInfo', JSON.stringify(data)); 
        this.router.navigate(['/CaseList']);       
      }
    )
  }

}
