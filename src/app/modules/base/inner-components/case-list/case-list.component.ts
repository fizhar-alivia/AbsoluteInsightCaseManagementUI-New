import { Component, OnInit } from '@angular/core';
import { UserInfoService } from "../../../../_services/user-info.service";
import { ApiService } from "../../../../_services/api.service";
import { Subject } from 'rxjs';

declare var getCaseViewListURL: any;

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  isClick = false;
  response: any = false;
  caseList: any = [];
  cols: any = [];

  // caseList: any = [{
  //   case_id: 12,
  //   ai_workflow_primary_sub_type: 'Individual',
  //   ai_workflow_primary_sub_name: 'Mathew'
  // }, {
  //   case_id: 13,
  //   ai_workflow_primary_sub_type: 'Organization',
  //   ai_workflow_primary_sub_name: 'Lemony'
  // }, {
  //   case_id: 14,
  //   ai_workflow_primary_sub_type: 'Individual',
  //   ai_workflow_primary_sub_name: 'Lewis'
  // }, {
  //   case_id: 15,
  //   ai_workflow_primary_sub_type: 'Individual',
  //   ai_workflow_primary_sub_name: 'John'
  // }];

  // cols: any = [{
  //   title: 'Case Id',
  //   data: 'case_id'
  // }, {
  //   title: 'Primary Subject Type',
  //   data: 'ai_workflow_primary_sub_type'
  // }, {
  //   title: 'Primary Subject Name',
  //   data: 'ai_workflow_primary_sub_name'
  // }];

  buttonsList: any;

  constructor(
    private userInfoService: UserInfoService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getCaseList();
    // this.setDtOptions();
    this.buttonsList = this.userInfoService.userSecurityInfo.ai_workflow_button_access;

  }

  // setDtOptions() {
  //   this.dtOptions = {
  //     paging: false,
  //     info: false,
  //     responsive: true,
  //     data: this.caseList,
  //     columns: this.cols,
  //   };
  // }

  getCaseList() {
    let completeURl = getCaseViewListURL + 'pageNumber=0'
    this.apiService.getRequest(completeURl).subscribe(
      data => {
        this.cols = data['ai_workflow_cmt_grid_columns_info'];
        this.caseList = data['ai_workflow_cmt_grid_data_info'];
        this.response = true;
        // this.dtTrigger.next();
      }
    )
  }

  collapseToggle() {
    this.isClick = !this.isClick;
  }

  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }


}
