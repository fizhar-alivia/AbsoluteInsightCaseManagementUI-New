import { Component, OnInit } from '@angular/core';
import { UserInfoService } from "../../../../_services/user-info.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isClick = false;
  userSideMenu: any;

  constructor(
    private userInfoService: UserInfoService
  ) { }

  ngOnInit(): void {

  }

  collapseToggle(){
    this.isClick = !this.isClick;
  }

}
