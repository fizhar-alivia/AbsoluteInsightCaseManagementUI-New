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

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  private handleErrorResponse(err: HttpErrorResponse): Observable<any>{
    console.log('Error',err);
    if (err.status === 401) {
      localStorage.removeItem('tokens');
      this.router.navigate(['/auth/login']);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //bypass login request from interceptor
    if (request.headers.has('Authorization')) {
      return next.handle(request).pipe(catchError(x=>this.handleErrorResponse(x)));
    }
    
    let tokens = JSON.parse(localStorage.getItem('tokens'))
    if (tokens == null) {
      this.router.navigate(['/auth/login']);
    }

    let req = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + tokens.access_token) })
    return next.handle(req).pipe(catchError(x=>this.handleErrorResponse(x)));
  }
}
