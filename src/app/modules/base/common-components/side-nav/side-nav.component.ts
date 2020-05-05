import { Component, OnInit } from '@angular/core';
import { UserInfoService } from "../../../../_services/user-info.service";
import { SharedService } from "../../../../_services/shared.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isOpen = false;
  userSideMenu: any;

  constructor(
    private userInfoService: UserInfoService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.userSideMenu = this.userInfoService.userSecurityInfo.ai_workflow_access_left_menu;
  }

  collapseToggle() {
    this.isOpen = !this.isOpen;
    this.sharedService.toggleSideMenu(this.isOpen);
  }

}
