import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CentralStampLayoutComposite} from "../model/split-area-model";
import {Store} from "@ngrx/store";
import {UpdateSplitConfigAction} from "../store/layout-action";
import {ISplitConfig} from "../model/split-config-model";
import {CentralStampState} from "../../../core/state/store/centralstamp-state";

@Component({
  selector: 'split-layout-column',
  templateUrl: './split-layout-column.component.html',
  styleUrls: ['./split-layout-column.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitLayoutColumnComponent implements OnInit {

  @Input() splitConfig : ISplitConfig;

  centralStampLayoutComposite = CentralStampLayoutComposite; // in angular is not possible to use enum class type directly in the html template!!
  constructor(private store: Store<CentralStampState>) { }

  ngOnInit() {
    //console.log('updated splitConfig ',this.splitConfig.splitColumnId);

  }

  onDragEnd(columnindex: number, sizesArray: Array<number>) {

    this.store.dispatch(new UpdateSplitConfigAction({splitConfigId: columnindex, sizesArray: sizesArray}));
  }

}
