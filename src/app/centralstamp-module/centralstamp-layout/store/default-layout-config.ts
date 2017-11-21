import {CentralStampLayoutColumn, CentralStampLayoutComposite, ISplitArea,} from "../model/split-area-model";
import {ISplitConfig} from "../model/split-config-model";

const treeZoneSplitArea : ISplitArea = {
  order : 0,
  size : 75,
  visible : true,
  splitPanelType : CentralStampLayoutComposite.PANEL_TREE_ZONE
};
const treeDeviceSplitArea : ISplitArea = {
  order : 1,
  size : 25,
  visible : true,
  splitPanelType : CentralStampLayoutComposite.PANEL_TREE_DEVICE
};

const layoutTreeSplitConfig : ISplitConfig = {
  direction : 'vertical',
  disabled : false,
  gutterSize : 5,
  splitAreas : [
    treeZoneSplitArea,
    treeDeviceSplitArea
  ],
  splitColumnId : CentralStampLayoutColumn.COLUMN_TREE
};

const treeSplitArea : ISplitArea = {
  order : 0,
  size : 15,
  visible : true,
  split : layoutTreeSplitConfig
};

const mapSplitArea : ISplitArea = {
  order : 0,
  size : 70,
  visible : true,
  splitPanelType : CentralStampLayoutComposite.PANEL_MAP
};
const videoSplitArea : ISplitArea = {
  order : 1,
  size : 30,
  visible : true,
  splitPanelType : CentralStampLayoutComposite.PANEL_VIDEO
};

const mapVideoSplitConfig : ISplitConfig = {
  direction : 'horizontal',
  disabled : false,
  gutterSize : 5,
  splitAreas : [
    mapSplitArea,
    videoSplitArea
  ],
  splitColumnId : CentralStampLayoutColumn.COLUMN_MAP_VIDEO
}
const mapVideoSplitArea : ISplitArea = {
  order : 0,
  size:60,
  visible :true,
  split : mapVideoSplitConfig
};

const eventsDisplayerSplitArea : ISplitArea = {
  order : 1,
  size:20,
  visible :true,
  splitPanelType : CentralStampLayoutComposite.PANEL_EVENT_DISPLAYER
};
const eventTimeLineSplitArea : ISplitArea = {
  order : 2,
  size:20,
  visible :true,
  splitPanelType : CentralStampLayoutComposite.PANEL_EVENT_TIMELINE
};

const mapVideoEventSplitConfig : ISplitConfig = {
  direction : 'vertical',
  disabled : false,
  gutterSize : 5,
  splitAreas : [
    mapVideoSplitArea,
    eventsDisplayerSplitArea,
    eventTimeLineSplitArea,
  ],
  splitColumnId : CentralStampLayoutColumn.COLUMN_EVENT_MAP_VIDEO
}

const mapVideoEventSplitArea : ISplitArea = {
  order : 1,
  size : 70,
  visible : true,
  split : mapVideoEventSplitConfig
};
const alarmDisplayerSplitArea : ISplitArea = {
  order : 0,
  size : 40,
  visible : true,
  splitPanelType : CentralStampLayoutComposite.PANEL_ALARM_DISPLAYER
};
// const alarmWorkflowSplitArea : ISplitArea = {
//   order : 1,
//   size : 30,
//   visible : true,
// };
const alarmReportSplitArea : ISplitArea = {
  order : 1,
  size : 30,
  visible : true,
  splitPanelType : CentralStampLayoutComposite.PANEL_ALARM_REPORT
};
const alarmSplitConfig : ISplitConfig = {
  direction : 'vertical',
  disabled : false,
  gutterSize : 5,
  splitAreas : [
    alarmDisplayerSplitArea,
    //alarmWorkflowSplitArea,
    alarmReportSplitArea
  ],
  splitColumnId : CentralStampLayoutColumn.COLUMN_ALARM
};
const alarmSplitArea : ISplitArea = {
  order : 2,
  size : 15,
  visible : true,
  split : alarmSplitConfig
};

export const defaultLayoutSplitConfig : ISplitConfig = {
  direction : 'horizontal',
  disabled : false,
  gutterSize : 5,

  splitAreas : [
    // column 0
    treeSplitArea,
    // column 1
    mapVideoEventSplitArea,
    // column 2
    alarmSplitArea
  ],
  splitColumnId : CentralStampLayoutColumn.ALL_COLUMNS
}
