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
    this.userSideMenu = this.userInfoService.userSecurityInfo.ai_workflow_access_left_menu;
  }

  collapseToggle(){
    this.isClick = !this.isClick;
  }

}
