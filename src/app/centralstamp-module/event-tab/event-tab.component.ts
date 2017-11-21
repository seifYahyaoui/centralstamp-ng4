import { Component, OnInit } from '@angular/core';
import {ReportService} from "./service/report.service";
import {Store} from "@ngrx/store";
import {CentralStampState} from "../../core/state/store/centralstamp-state";
import {LoadSupportedReportFieldsAction} from "./state/event-tab-action";
import {Observable} from "rxjs";
import {ReportData, ReportField} from "./model/dto/event-tab.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-event-tab',
  templateUrl: './event-tab.component.html',
  styleUrls: ['./event-tab.component.css']

})
export class EventTabComponent implements OnInit {

  transferDataSuccess($event: any) {
    let reportField : ReportField = Object.assign($event.dragData);

    this.selectedFields.push({reportField: reportField, columnName: reportField.name});
    this.reportStructure.fields[reportField.name] = reportField;
  }

  //////////////////////////////////////
  selectedField : ReportField;
  selectedFields : UIReportField[] = [];
  title : string ='';

  reportStructure : ReportData = {
    fields : {},
    title : ''
  };

  supportedReportFields : ReportField[] = [];

  constructor(private serviceService : ReportService, private store : Store<CentralStampState>) {

  }

  ngOnInit() {
    this.refreshList();
    // this.serviceService.login().subscribe(r => {
    //   console.log('login done!!!!',r);
    //
    //   this.serviceService.getSupportedFields().subscribe(r => {
    //     console.log("SupportedFields ",r);
    //     this.supportedReportFields = r;
    //   });
    // });

    //this.serviceService.getAllReportStructure().subscribe(r =>  console.log("AllReportStructure ",r));
  }

  loadAllSupportedReportFieds() {
    this.serviceService.getSupportedFields()
      .map(payload => new LoadSupportedReportFieldsAction(payload))
      .subscribe(action => this.store.dispatch(action));
  }

  onSubmit(reportFieldName: string, reportField: ReportField){
    this.selectedFields.push({reportField: reportField, columnName: reportFieldName});
    this.reportStructure.fields[reportFieldName] = reportField;

  }

  refreshList(){
    this.serviceService.getSupportedFields().subscribe(r => {
      this.supportedReportFields = r;
    });
  }

  logout(){
    this.serviceService.logout().subscribe(r => console.log(r));
  }

  submitReport(){
    // let report : ReportData = {
    //   fields : this.selectedFields,
    //   title : this.title
    // };
    console.log('submitReport() ==> selectedFields ',this.selectedFields);
    const report : ReportData = this.transformReportUIToReportDTO(this.selectedFields);
    this.serviceService.submitReport(report)
      .subscribe(r => console.log('save report '));
    this.reportStructure  = {
      fields : {},
      title : ''
    };
    this.title = '';
    //this.selectedField = null;
    this.selectedFields = [];
  }
  transformReportUIToReportDTO(reportUI : UIReportField[] ){
    let report : ReportData = {
      title : this.title,
      fields : {}
    };
    reportUI.forEach(r =>{
      report.fields[r.columnName] = r.reportField;
    });
    return report;
  }

}

export interface UIReportField{
  reportField: ReportField,
  columnName : string
}
