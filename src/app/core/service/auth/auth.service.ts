import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class AuthService {
  private token: string ;//= 'c2393516-e82b-4513-88b6-6931d689c075';
  constructor(private http: HttpClient, private httpLogin:Http) { }


  logout(): Observable<boolean> {
    return this.http.post('http://localhost:8080/oauth/logout',{}).map(r => true);
  }

  login(): Observable<string> {

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const clientId = 'centralstampClient';
    const clientSecret = 'secret';
    var authorizationBasic = btoa(clientId + ':' + clientSecret);
    headers.append('Authorization', 'Basic ' + authorizationBasic);
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    let token ;
    const credentials = 'grant_type=password&username=john&password=123';
    return this.httpLogin.post('http://localhost:8080/oauth/token', credentials,options).map(
      (res : any) => {
        let token = res.json().access_token;
        this.token = token;
        return token;
      }
    );
  }

  getToken(): string{
    // if(this.token==null || this.token==''){
    //   // redirect to login page
    //   return '';
    // }
    return this.token;
  }

}
