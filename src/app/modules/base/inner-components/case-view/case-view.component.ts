import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../../../_services/shared.service";
@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.scss']
})
export class CaseViewComponent implements OnInit {

  breadCrumbs = [
    {'path': '/List', 'title': 'Home'},
    {'path': '/View', 'title': 'View'}
  ]

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.updateBreadCrumbs(this.breadCrumbs);
  }

}
