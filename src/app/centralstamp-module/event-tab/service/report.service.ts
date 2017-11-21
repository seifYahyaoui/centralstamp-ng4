import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, ResponseContentType} from "@angular/http";
import {Observable} from "rxjs";
import {ReportData, ReportField} from "../model/dto/event-tab.model";

import * as FileSaver from 'file-saver';
import {HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpResponse} from "@angular/common/http";


@Injectable()
export class ReportService {

  public url = "http://localhost:8080/report"
  token : string;
  options;
  constructor(private http : HttpClient) {

  }

  logout(): Observable<boolean> {
    return this.http.post('http://localhost:8080/oauth/logout',{},this.options).map(r => true);
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
    return this.http.post('http://localhost:8080/oauth/token', credentials).map(
      (res : any) => {
        let token = res.json().access_token;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        this.options = new RequestOptions({headers: headers});
        this.token = token;
        return token;
      }
    );
  }

  getSupportedFields() : Observable<ReportField[]> {
    return this.http.get<ReportField[]>(this.url+'/supportedFields').map(
      (res:ReportField[]) => {
        return res;
      }
    );
  }

  getAllReportStructure(): Observable<ReportData[]> {
    console.log(this.options);
    return this.http.get<ReportData[]>(this.url+'/allReports',{responseType:'json'})
      .map(
      (res:ReportData[]) => {
        return res;
      }
    )
      ;
  }

  submitReport(report: ReportData): Observable<ReportData> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.token);
    let options = new RequestOptions({headers: headers});
    let jsonBody = JSON.stringify(report);
    console.log('jsonBody ', jsonBody);
   return this.http.post<ReportData>(this.url+'/saveReport',jsonBody,{headers: new HttpHeaders().set('Content-Type', 'application/json')}).map(
     res => res
   );
  }

  fetchDataForReport(report : ReportData) : Observable<any[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.token);
    let options = new RequestOptions({headers: headers});
    let jsonBody = JSON.stringify(report);
    return this.http.post<any[]>(this.url+'/fetchData',jsonBody,{headers: new HttpHeaders().set('Content-Type', 'application/json')}).map(res => {
      console.log('fetchdata ',res);
      return res;
    });
  }

  getPdf(report: ReportData): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.token);
    let responseType = ResponseContentType.Blob;
    let options = new RequestOptions({headers: headers, responseType: responseType});
    let jsonBody = JSON.stringify(report);
    return this.http.post(this.url+'/getpdf',jsonBody,{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType:'blob'}).map(res => {
      let pdfReport = new Blob([res], { type: 'application/pdf' });
      FileSaver.saveAs(pdfReport,'pdfReport.pdf');
      return res;
    });
  }

  getXlsx(report: ReportData): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.token);
    let responseType = ResponseContentType.Blob;
    let options  = {headers: headers, responseType: responseType};
    let jsonBody = JSON.stringify(report);
    return this.http.post(this.url+'/getxlsx',jsonBody,{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType:'blob'}).map(res => {
      let xlsxReport = new Blob([res], { type: 'application/octet-stream' });
      FileSaver.saveAs(xlsxReport,'xlsxReport.xlsx');
      return res;
    });
  }

}

