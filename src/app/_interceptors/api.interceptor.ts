/**
 * @Author: Adnan sheikh
 * @Created: 23-4-2020
 * @Description: This file intercepts each and every API and appends a token in header
 * this file also intercepts error responses of each api
 */


import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  private handleErrorResponse(err: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<any>{
    if (err.status === 401 && (err.url.includes('grant_type=password') || err.url.includes('grant_type=refresh_token')))
    {
      localStorage.removeItem('tokens');
      this.router.navigate(['/auth/login']);
    }
    else if (err.status === 401 && (!err.url.includes('grant_type=password') && !err.url.includes('grant_type=refresh_token'))){
      let tokens = JSON.parse(localStorage.getItem('tokens'));
      if (tokens != null) {
        this.authService.refreshToken(tokens.refresh_token).subscribe(
          data => {
            if (data['access_token']) {
              localStorage.setItem('tokens', JSON.stringify(data));
              let currentRoute = this.router.url;
              this.router.navigate([currentRoute]);
            }
          }
        )
      }else{
        this.router.navigate(['/auth/login']);
      }
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //bypass login request from interceptor
    if (request.headers.has('Authorization')) {
      return next.handle(request).pipe(catchError(x=>this.handleErrorResponse(x, request, next)));
    }
    
    let tokens = JSON.parse(localStorage.getItem('tokens'));
    if (tokens == null) {
      this.router.navigate(['/auth/login']);
    }

    let req = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + tokens.access_token) })
    return next.handle(req).pipe(catchError(x=>this.handleErrorResponse(x, request, next)));
  }
}
