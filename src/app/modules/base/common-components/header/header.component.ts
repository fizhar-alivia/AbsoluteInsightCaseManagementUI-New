import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserInfoService } from "../../../../_services/user-info.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isClick = false;
  collapseToggle(){
    this.isClick = !this.isClick;
  }
  userName: any;

  constructor(
    private router: Router,
    private userInfoService: UserInfoService
  ) { }

  ngOnInit(): void {
    this.userName = this.userInfoService.userDetail.firstName +' '+ this.userInfoService.userDetail.lastName;
  }

  signout(){
    localStorage.removeItem('tokens');
    this.router.navigate(['auth/login']);
  }

}
