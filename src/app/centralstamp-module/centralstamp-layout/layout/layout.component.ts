import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {CentralStampLayoutColumn, CentralStampLayoutComposite, ISplitArea} from "../model/split-area-model";
import {defaultLayoutSplitConfig} from "../store/default-layout-config";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {UpdateSplitConfigAction} from "../store/layout-action";
import {ISplitConfig} from "../model/split-config-model";
import {INITIAL_LAYOUT_STATE} from "../store/layout-state";
import {CentralStampState} from "../../../core/state/store/centralstamp-state";

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  //localStorageName = 'angular-split';
  // config: IConfig = null;
  layoutConfig: ISplitConfig = defaultLayoutSplitConfig;
  localStorageName = 'centralstamp-layout-conf';
  centralStampLayoutComposite = CentralStampLayoutComposite; // in angular is not possible to use enum class type directly in the html template!!

  centralStampLayoutColumn : CentralStampLayoutColumn;

  layoutConfig$: Observable<ISplitConfig>;

  constructor(private store: Store<CentralStampState>){

  }
  ngOnInit() {
    this.layoutConfig$ = this.store.map((state) => {

      let layout = state.layoutState;

      return layout.splitConfig;
      //return state.centralStampState.layoutState.splitConfig;
    });
    this.layoutConfig$.subscribe(
      conf => {
        this.layoutConfig = conf;
        this.saveLocalStorage(conf);
      }
    );
    //console.log('ngOnInit layout-component plat ===> ', this.platSplitConfig(this.layoutConfig));
    if(localStorage.getItem(this.localStorageName)) {
      this.layoutConfig = JSON.parse(localStorage.getItem(this.localStorageName));
    }
    else {
      this.resetConfig();
    }
  }

  resetConfig() {
    //this.config = _.cloneDeep(defaultConfig);

    localStorage.removeItem(this.localStorageName);
  }

  onDragEnd(columnindex: number, sizesArray: Array<number>) {

    this.store.dispatch(new UpdateSplitConfigAction({splitConfigId: columnindex, sizesArray: sizesArray}));
    // Column dragged
    if(columnindex === -1) {
      // Set size for all visible columns
      //this.config.columns.filter(c => c.visible === true).forEach((column, index) => column.size = sizesArray[index]);
    }
    // Row dragged
    else {
      // Set size for all visible rows from specified column
     // this.config.columns[columnindex].rows.filter(r => r.visible === true).forEach((row, index) => row.size = sizesArray[index]);
    }

    //this.saveLocalStorage();
  }

  toggleDisabled() {
    //this.config.disabled = !this.config.disabled;

    //this.saveLocalStorage();
  }

  refreshColumnVisibility() {
    //this.config.columns.forEach((column, index) => {
    //  column.visible = column.rows.some(row => row.visible === true);
    //});

    //this.saveLocalStorage();
  }

  saveLocalStorage(layoutConfig: ISplitConfig) {
    const observer = Observable.create((observer)=>{
        observer.next(30);
    });

    const unsubscibe = observer.subscribe(x => {
      console.log('hit observer ============>',x);
    });

    //localStorage.setItem(this.localStorageName, JSON.stringify(this.config));
    localStorage.setItem(this.localStorageName, JSON.stringify(layoutConfig));
  }

  platSplitConfig(splitConfig : ISplitConfig): ISplitConfig[]{
    let res : ISplitConfig[] = [];
    res.push(splitConfig);
    splitConfig.splitAreas.forEach(area => {
      if(area.split){
        res = res.concat(this.platSplitConfig(area.split));
      }
    });
    return res;
  }
}
