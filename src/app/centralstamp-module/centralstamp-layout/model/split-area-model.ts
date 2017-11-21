

import {ISplitConfig} from "./split-config-model";

export interface ISplitArea {
  order : number,
  size : number,
  visible : boolean,
  split? : ISplitConfig,
  splitPanelType? : CentralStampLayoutComposite // must be unique or null
}

export enum CentralStampLayoutComposite {
  PANEL_TREE_ZONE,
  PANEL_TREE_DEVICE,

  PANEL_MAP,
  PANEL_VIDEO,

  PANEL_EVENT_DISPLAYER,
  PANEL_EVENT_TIMELINE,

  PANEL_ALARM_DISPLAYER,
  PANEL_ALARM_REPORT
};

export enum CentralStampLayoutColumn {
  ALL_COLUMNS,
  COLUMN_TREE,
  COLUMN_MAP_VIDEO,
  COLUMN_EVENT_MAP_VIDEO,
  COLUMN_ALARM
}
