import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

declare const oAuthGetTokenURL: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(crdentials: any) {

    const authTokenHeader = new HttpHeaders({
      'Authorization': 'Basic YWktd2ViOnNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(oAuthGetTokenURL, crdentials, {headers: authTokenHeader});
  }

  getRequest(url){
    return this.http.get(url);
  }
}
