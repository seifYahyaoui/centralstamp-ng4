import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ReportService} from "../event-tab/service/report.service";
import {ReportData} from "../event-tab/model/dto/event-tab.model";

import * as _ from 'lodash';
import {DragDropService, DragDropConfig, DragDropSortableService} from "ng2-dnd";

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css'],
  providers: []
})
export class EventTimelineComponent implements OnInit {

  reportStructure : ReportData[];

  dataForSelectedReport : any[] = [];
  data : ReportUI ;

  reportData: ReportData;
  constructor(private serviceReport: ReportService) {
  }

  ngOnInit() {

     this.serviceReport.getAllReportStructure()
      .subscribe(res => {
          if(res){
             this.reportStructure = res;
          }
        });

  }

  refreshReportsFromDb(){
    this.serviceReport.getAllReportStructure()
      .subscribe( res => {
        this.reportStructure = res;
      });
  }

  displayReport(report : ReportData){
    let data : ReportUI ;
    let fields : string[] =  _.keys(report.fields);
    this.serviceReport.fetchDataForReport(report).subscribe(res => {
      this.dataForSelectedReport = res;
      this.data  = this.adaptReportData(res, fields,report.title);
    });
    this.reportData = report;

  }

  adaptReportData(data : any[], fields : string[],title:string) : ReportUI {
    let reportUI : ReportUI = {
      headFields : fields,
      rows : [],
      title : title
    };
    data.forEach(row => {

      let rowUI : ReportRowUI = {
        columns: []
      };
      fields.forEach(field =>{
        rowUI.columns.push(row[field]);
      });
      reportUI.rows.push(rowUI);
    })
    return reportUI;
  }

  downloadPdf(){
    this.serviceReport.getPdf(this.reportData).subscribe(
      () =>console.log('pdf generation done ')
    );
  }

  downloadXlsx(){
    this.serviceReport.getXlsx(this.reportData).subscribe(
      () =>console.log('xlsx generation done ')
    );
  }
}

export interface ReportUI {
  headFields : string[],
  rows : ReportRowUI[],
  title : string
}
export interface ReportRowUI {
  columns : any[]
}

///////////////
