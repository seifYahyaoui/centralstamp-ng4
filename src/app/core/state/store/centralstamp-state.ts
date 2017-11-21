import {LayoutState, INITIAL_LAYOUT_STATE} from "../../../centralstamp-module/centralstamp-layout/store/layout-state";
import {EventTabState, EVENT_TAB_INITIAL_STATE} from "../../../centralstamp-module/event-tab/state/event-tab-state";
import {
  EventTimelineState,
  INITIAL_EVENT_TIMELINE_STATE
} from "../../../centralstamp-module/event-timeline/state/event-timeline-state";
import {
  EventWorkflowState,
  INITIAL_EVENT_WORKFLOW_STATE
} from "../../../centralstamp-module/event-workflow/state/event-workflow-state";
import {
  DisplayLayerState,
  INITIAL_DISPLAY_LAYER_STATE
} from "../../../centralstamp-module/display-layer/state/display-layer-state";
import {TreeState, INITIAL_TREE_STATE} from "../../../centralstamp-module/tree/state/tree-state";
import {
  TreeDeviceState,
  INITIAL_TREE_DEVICE_STATE
} from "../../../centralstamp-module/tree-device/state/tree-device-state";
import {
  VideoMatrixState,
  INITIAL_VIDEO_MATRIX_STATE
} from "../../../centralstamp-module/video-matrix/state/video-matrix-state";
import {RouterState} from "@ngrx/router-store";
export interface CentralStampState {

  eventTabState : EventTabState,
  eventTimelineState : EventTimelineState,
  layoutState : LayoutState,
  eventWorkflowState : EventWorkflowState,
  displayLayerState : DisplayLayerState,
  treeState : TreeState,
  treeDeviceState : TreeDeviceState,
  videoMatrixState : VideoMatrixState,
  routerState: RouterState;
  // routerState :  RouterReducerState // https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
}

export const INITIAL_CENTRALSTAMP_STATE : CentralStampState = {
  layoutState : INITIAL_LAYOUT_STATE,
   eventTabState : EVENT_TAB_INITIAL_STATE,
  eventTimelineState : INITIAL_EVENT_TIMELINE_STATE,
  eventWorkflowState : INITIAL_EVENT_WORKFLOW_STATE,
  displayLayerState : INITIAL_DISPLAY_LAYER_STATE,
  treeState : INITIAL_TREE_STATE,
  treeDeviceState : INITIAL_TREE_DEVICE_STATE,
  videoMatrixState : INITIAL_VIDEO_MATRIX_STATE,
  routerState: {path:''}
}
