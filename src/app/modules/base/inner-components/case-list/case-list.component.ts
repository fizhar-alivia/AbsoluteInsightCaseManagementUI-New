import { Component, OnInit } from '@angular/core';
import { UserInfoService } from "../../../../_services/user-info.service";
import { ApiService } from "../../../../_services/api.service";
import { SharedService } from "../../../../_services/shared.service";

declare var getCaseViewListURL: any;

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {

  isSideMenuOpen = false;
  isHeaderMenuOpen = false;
  response: any = false;
  caseList: any = [];
  cols: any = [];
  buttonsList: any;
  breadCrumbs = [{'path': '/List', 'title': 'Home'}]
  constructor(
    private userInfoService: UserInfoService,
    private apiService: ApiService,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.getCaseList();
    this.sharedService.updateBreadCrumbs(this.breadCrumbs);
    this.buttonsList = this.userInfoService.userSecurityInfo.ai_workflow_button_access;
    this.sharedService.sideMenuOpened.subscribe(value => this.isSideMenuOpen = value);
    this.sharedService.headerMenuOpened.subscribe(value => this.isHeaderMenuOpen = value);
  }

  getCaseList() {
    let completeURl = getCaseViewListURL + 'pageNumber=0'
    this.apiService.getRequest(completeURl).subscribe(
      data => {
        this.cols = data['ai_workflow_cmt_grid_columns_info'];
        this.caseList = data['ai_workflow_cmt_grid_data_info'];
        this.response = true;
      }
    )
  }
}
