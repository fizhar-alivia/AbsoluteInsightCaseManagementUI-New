import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  userDetail: any = JSON.parse(localStorage.getItem('userInfo'));
  userSecurityInfo: any = JSON.parse(localStorage.getItem('userSecurityInfo'));
}
