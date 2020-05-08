import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userDetail: any = {};
  userSecurityInfo: any = {};

  constructor() { 
    this.userDetail = JSON.parse(localStorage.getItem('userInfo'));
    this.userSecurityInfo = JSON.parse(localStorage.getItem('userSecurityInfo'));
  }
}
