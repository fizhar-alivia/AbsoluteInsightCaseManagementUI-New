import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  isClick = false;
  collapseToggle(){
    this.isClick = !this.isClick;
  }
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
