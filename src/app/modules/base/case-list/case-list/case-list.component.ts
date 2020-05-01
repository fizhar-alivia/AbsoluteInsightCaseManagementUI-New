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

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isClick = false;

  // caseList: any = [];
  // cols: any = [];
  caseList: any = [{
    "ai_workflow_time_remaining":"00:00",
    "Allegation Type":"",
    "initiator":"admin",
    "ai_workflow_id":null,
    "ai_workflow_primary_allegation":null,
    "ai_workflow_pri_sub_id":null,
    "ai_workflow_pri_sub_name":null,
    "Risk Score":"",
    "ai_workflow_case_id":"alivia-0000000006",
    "ai_workflow_pri_sub_type":null,
    "ai_workflow_priority":null,
    "ai_workflow_submit_date":1587721452965,
    "ai_workflow_stage":null,
    "ai_workflow_status":null
 }];
  cols: any = [{
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_id",
    "format":null,
    "defaultSort":"desc",
    "title":"Case ID",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_pri_sub_type",
    "format":null,
    "defaultSort":null,
    "title":"Primary Subject Type",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_pri_sub_id",
    "format":null,
    "defaultSort":null,
    "title":"Primary Subject ID",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_pri_sub_name",
    "format":null,
    "defaultSort":null,
    "title":"Primary Subject Name",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_primary_allegation",
    "format":null,
    "defaultSort":null,
    "title":"Primary Allegation",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"Allegation Type",
    "format":null,
    "defaultSort":null,
    "title":"Allegation Type",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_submit_date",
    "format":"dd/mm/yyyy",
    "defaultSort":null,
    "title":"Intake Date",
    "type":"Number",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_time_remaining",
    "format":null,
    "defaultSort":null,
    "title":"Time Remaining",
    "type":"Number",
    "isFilterAble":null,
    "isSortAble":null
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_priority",
    "format":null,
    "defaultSort":null,
    "title":"Case Priority",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_status",
    "format":null,
    "defaultSort":null,
    "title":"Case Status",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"ai_workflow_stage",
    "format":null,
    "defaultSort":null,
    "title":"Case Stage",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"initiator",
    "format":null,
    "defaultSort":null,
    "title":"Case Assignee",
    "type":"String",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"1",
    "defaultContent":null,
    "data":"Risk Score",
    "format":null,
    "defaultSort":null,
    "title":"Risk Score",
    "type":"Number",
    "isFilterAble":"1",
    "isSortAble":"1"
 },
 {
    "visible":"0",
    "defaultContent":null,
    "data":"ai_workflow_case_id",
    "format":null,
    "defaultSort":null,
    "title":"CaseId",
    "type":"String",
    "isFilterAble":"0",
    "isSortAble":"0"
 }];

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
    // this.getCaseList();
    this.setDtOptions();
    this.buttonsList = this.userInfoService.userSecurityInfo.ai_workflow_button_access;
    console.log(this.buttonsList);
    
  }

  setDtOptions() {
    this.dtOptions = {
      paging: false,
      info: false,
      responsive: true,
      data: this.caseList,
      columns: this.cols,
    };
  }

  getCaseList() {
    let completeURl = getCaseViewListURL + 'pageNumber=0'
    this.apiService.getRequest(completeURl).subscribe(
      data => {
        console.log(data);

        this.cols = data['ai_workflow_cmt_grid_columns_info'];
        this.caseList = data['ai_workflow_cmt_grid_data_info'];
        this.dtTrigger.next();
      }
    )
  }

  collapseToggle() {
    this.isClick = !this.isClick;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
