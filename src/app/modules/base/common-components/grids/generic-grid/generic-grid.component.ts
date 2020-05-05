import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.scss']
})
export class GenericGridComponent implements OnInit, OnChanges, AfterViewInit {

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

  ngAfterViewInit() {
    setTimeout(() => {
      $("#dtable tbody tr").bind("contextmenu", function (e) {
        var top = e.pageY - 350;
        var left = e.pageX - 50;
        $("#box").css({ 
          top: top,
          left: left
        });
        $('#box').show();
        e.preventDefault();
      });
    }, 1000);

    $(document).bind("click", function (e) {
      $('#box').hide();
    });
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
