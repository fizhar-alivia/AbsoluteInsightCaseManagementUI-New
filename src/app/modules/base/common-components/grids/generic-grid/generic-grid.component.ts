import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.scss']
})
export class GenericGridComponent implements OnInit {

  dtOptions: any = {};
	@Input() data: any;
	@Input() cols: any;
	@Input() response: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
		if (this.response) {
			this.setDtOptions();
		}
  }
  
  setDtOptions() {
    this.dtOptions = {
      paging: false,
      info: false,
      responsive: true,
      data: this.data,
      columns: this.cols,
    };
  }

}
