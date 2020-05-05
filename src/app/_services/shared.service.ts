import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isSideMenuOpened = new BehaviorSubject(false);
  sideMenuOpened = this.isSideMenuOpened.asObservable();
  
  private isHeaderMenuOpened = new BehaviorSubject(false);
  headerMenuOpened = this.isHeaderMenuOpened.asObservable();

  constructor() { }

  toggleSideMenu(value: boolean) {
    this.isSideMenuOpened.next(value);
  }

  toggleHeaderMenu(value: boolean) {
    this.isHeaderMenuOpened.next(value);
  }

}
