import { Component, OnInit } from '@angular/core';
import { Md5 } from "md5-typescript";
import { AuthService } from 'src/app/_services/auth.service';
import * as CryptoJS from 'crypto-js';
import { Router } from "@angular/router";

declare const principalDataURL: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailInput: any;
  passwordInput: any;

  encryptionKey = 'abcd';

  constructor(
    private authService: AuthService,
    private router: Router
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
          this.router.navigate(['/CaseList']);
        }
      },
      error => {

      }
    )

  }

  getPrincipalData() {
    this.authService.getRequest(principalDataURL).subscribe(
      data => {
        console.log(data);        
      }
    )
  }

}
