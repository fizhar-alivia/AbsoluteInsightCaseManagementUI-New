import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isClick = false;
  collapseToggle(){
    this.isClick = !this.isClick;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
