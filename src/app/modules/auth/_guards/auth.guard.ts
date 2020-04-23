/**
 * @Author: Adnan sheikh
 * @Created: 23-4-2020
 * @Description: This file acts like a guard and checks if the user is allowed to access a route or not
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../../../_services/auth.service"
import { map } from 'rxjs/operators';
declare const principalDataURL: any;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getRequest(principalDataURL).pipe(map(
      data=>{
        if (data) {
          return true;
        }
      },
      error => {
        return false;
      })
    )
  }

}
