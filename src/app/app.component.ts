//import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }

import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {ReportService} from "./centralstamp-module/event-tab/service/report.service";


interface IConfig {
  columns: Array<{
    visible: boolean,
    size: number,
    rows: Array<{
      visible: boolean,
      size: number,
      type: string
    }>
  }>
  disabled: boolean
}


const defaultConfig: IConfig = {
  columns: [
    {
      visible: true,
      size: 15,
      rows: [
        { visible: true, size: 75, type: 'panel-tree-zone' },
        { visible: true, size: 25, type: 'panel-tree-device' }
      ]
    },
    {
      visible: true,
      size: 70,
      rows: [
        { visible: true, size: 60, type: 'panel-map' },
        { visible: true, size: 20, type: 'panel-events' },
        { visible: true, size: 20, type: 'panel-timeline' }
      ]
    },
    {
      visible: true,
      size: 15,
      rows: [
        { visible: true, size: 40, type: 'all alarms' },
        { visible: true, size: 30, type: 'panel-alarm-workflow' },
        { visible: true, size: 30, type: 'panel-alarm-report' }
      ]
    }
  ],
  disabled: false
};

interface ISplitConfig {
  direction: string,
  disabled: boolean,
  gutterSize: number,
  splitAreas: ISplitArea[],
}

interface ISplitArea {
  order : number,
  size : number,
  visible : boolean,
  split? : ISplitConfig,
  splitType? : string
}


enum CentralStampLayoutComposite {
  PANEL_TREE_ZONE,
  PANEL_TREE_DEVICE,
  PANEL_MAP,
  PANEL_VIDEO,
  PANEL_EVENT_DISPLAYER,
  PANEL_EVENT_TIMELINE,
  PANEL_ALARM_DISPLAYER,
  PANEL_ALARM_REPORT
}

const panelTreeZone : ISplitArea = {
  order : 0,
  size : 75,
  visible : true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_TREE_ZONE]
};
const panelTreeDevice : ISplitArea = {
  order : 1,
  size : 25,
  visible : true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_TREE_DEVICE]
};
const layoutConfigColumn_0 : ISplitArea = {
  order : 0,
  size : 15,
  visible : true,
  split : <ISplitConfig>{
    direction : 'vertical',
    disabled : false,
    gutterSize : 5,
    splitAreas : [
      panelTreeZone,
      panelTreeDevice
    ]
  }
};

const panelMap : ISplitArea = {
  order : 0,
  size : 70,
  visible : true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_MAP]
};
const panelVideo : ISplitArea = {
  order : 1,
  size : 30,
  visible : true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_VIDEO]
};
const layoutConfigColumn_1_row_0_map_video : ISplitArea = {
  order : 0,
  size:60,
  visible :true,
  split : <ISplitConfig>{
    direction : 'horizontal',
    disabled : false,
    gutterSize : 5,
    splitAreas : [
      panelMap,
      panelVideo
    ]
  }
};

const panelEventsDisplayer : ISplitArea = {
  order : 1,
  size:20,
  visible :true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_EVENT_DISPLAYER]
};
const panelEventTimeLine : ISplitArea = {
  order : 2,
  size:20,
  visible :true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_EVENT_TIMELINE]
};
const layoutConfigColumn_1 : ISplitArea = {
  order : 1,
  size : 70,
  visible : true,
  split : <ISplitConfig>{
    direction : 'vertical',
    disabled : false,
    gutterSize : 5,
    splitAreas : [
      layoutConfigColumn_1_row_0_map_video,
      panelEventsDisplayer,
      panelEventTimeLine,
    ]
  }
};
const panelAlarmDisplayer : ISplitArea = {
  order : 0,
  size : 40,
  visible : true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_ALARM_DISPLAYER]
};
const panelAlarmWorkflow = {
  order : 1,
  size : 30,
  visible : true,
};
const panelAlarmReport : ISplitArea = {
  order : 2,
  size : 30,
  visible : true,
  splitType : CentralStampLayoutComposite[CentralStampLayoutComposite.PANEL_ALARM_REPORT]
};
const layoutConfigColumn_2 : ISplitArea = {
  order : 2,
  size : 15,
  visible : true,
  split : <ISplitConfig>{
    direction : 'vertical',
    disabled : false,
    gutterSize : 5,
    splitAreas : [
      panelAlarmDisplayer,
      panelAlarmWorkflow,
      panelAlarmReport
    ]
  }
};

const customLayoutConfig : ISplitConfig = {
  direction : 'horizontal',
  disabled : false,
  gutterSize : 5,
  splitAreas : [
    // column 0
    layoutConfigColumn_0,
    // column 1
    layoutConfigColumn_1,
    // column 2
    layoutConfigColumn_2
  ]
}

@Component({
  selector: 'app-root',
  styles: [`
    :host {
        display: block;
        width: 100%;
        height: 100%;
    }
    .explanations {
        padding: 15px;
    }
    .panel {
        font-size: 100px;
        font-weight: bold;
        text-align: center;
        color: #cccccc;
    }
  `],
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('appDimension', {read: ElementRef})
  appDimensionElementRef: ElementRef;
  windowHeight : number;



  constructor(){
    console.log('window.screen.height : ', window.screen.height)
  }

  ngAfterViewInit(){
    this.windowHeight = this.appDimensionElementRef.nativeElement.getBoundingClientRect().height;
    console.log('window height : ',this.windowHeight);


  }
  ngOnInit() {

  }
  // localStorageName = 'angular-split'
  // config: IConfig = null;
  // @Input() layoutConfig: ISplitConfig = customLayoutConfig;
  // centralStampLayoutComposite = CentralStampLayoutComposite;
  // ngOnInit() {
  //   console.log('config ',this.layoutConfig);
  //   if(localStorage.getItem(this.localStorageName)) {
  //     this.config = JSON.parse(localStorage.getItem(this.localStorageName));
  //   }
  //   else {
  //     this.resetConfig();
  //   }
  // }
  //
  // resetConfig() {
  //   this.config = _.cloneDeep(defaultConfig);
  //
  //   localStorage.removeItem(this.localStorageName);
  // }
  //
  // onDragEnd(columnindex: number, sizesArray: Array<number>) {
  //   console.log('onDragEnd == '+columnindex+' == '+sizesArray);
  //   // Column dragged
  //   if(columnindex === -1) {
  //     // Set size for all visible columns
  //     this.config.columns.filter(c => c.visible === true).forEach((column, index) => column.size = sizesArray[index]);
  //   }
  //   // Row dragged
  //   else {
  //     // Set size for all visible rows from specified column
  //     this.config.columns[columnindex].rows.filter(r => r.visible === true).forEach((row, index) => row.size = sizesArray[index]);
  //   }
  //
  //   this.saveLocalStorage();
  // }
  //
  // // v2
  // onDragEndV2(columnindex: number, sizesArray: Array<number>) {
  //   // Column dragged
  //   if(columnindex === -1) {
  //     // Set size for all visible columns
  //     this.config.columns.filter(c => c.visible === true).forEach((column, index) => column.size = sizesArray[index]);
  //     this.layoutConfig.splitAreas.filter(c => c.visible === true).forEach((column, index) => column.size = sizesArray[index]);
  //   }
  //   // Row dragged
  //   else {
  //     // Set size for all visible rows from specified column
  //     this.config.columns[columnindex].rows.filter(r => r.visible === true).forEach((row, index) => row.size = sizesArray[index]);
  //   }
  //
  //   this.saveLocalStorage();
  // }
  //
  // toggleDisabled() {
  //   this.config.disabled = !this.config.disabled;
  //
  //   this.saveLocalStorage();
  // }
  //
  // refreshColumnVisibility() {
  //   this.config.columns.forEach((column, index) => {
  //     column.visible = column.rows.some(row => row.visible === true);
  //   });
  //
  //   this.saveLocalStorage();
  // }
  //
  // saveLocalStorage() {
  //   localStorage.setItem(this.localStorageName, JSON.stringify(this.config));
  // }
}
