import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserInfoService } from "../../../../_services/user-info.service";
import { SharedService } from "../../../../_services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isOpen = false;
  userName: any;

  constructor(
    private router: Router,
    private userInfoService: UserInfoService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.userName = this.userInfoService.userDetail.firstName +' '+ this.userInfoService.userDetail.lastName;
  }

  signout(){
    localStorage.removeItem('tokens');
    this.router.navigate(['auth/login']);
  }

  collapseToggle(){
    this.isOpen = !this.isOpen;
    this.sharedService.toggleHeaderMenu(this.isOpen);
  }

}
