import {Action, ActionReducer, combineReducers} from "@ngrx/store";

import {RouterState, routerReducer} from "@ngrx/router-store";
import {CentralStampState, INITIAL_CENTRALSTAMP_STATE} from "./centralstamp-state";
import {storeFreeze} from 'ngrx-store-freeze';
import {layoutReducer} from "../../../centralstamp-module/centralstamp-layout/store/layout-reducer";
import {eventTabReducer} from "../../../centralstamp-module/event-tab/state/event-tab-reducer";
import {compose} from "@ngrx/core";
import {eventTimelineReducer} from "../../../centralstamp-module/event-timeline/state/event-timeline-reducer";
import {eventWorkflowReducer} from "../../../centralstamp-module/event-workflow/state/event-workflow-reducer";
import {displayLayerReducer} from "../../../centralstamp-module/display-layer/state/display-layer-reducer";
import {TreeReducer} from "../../../centralstamp-module/tree/state/tree-reducer";
import {TreeDeviceReducer} from "../../../centralstamp-module/tree-device/state/tree-device-reducer";
import {VideoMatrixReducer} from "../../../centralstamp-module/video-matrix/state/video-matrix-reducer";

// use this one for production
export const centralStampState = {
  layoutState : layoutReducer,
  eventTabState : eventTabReducer,
  eventTimelineState: eventTimelineReducer,
  eventWorkflowState : eventWorkflowReducer,
  displayLayerState : displayLayerReducer,
  treeState : TreeReducer,
  treeDeviceState : TreeDeviceReducer,
  videoMatrixState : VideoMatrixReducer,
  routerState: routerReducer,
}

// export const developmentCSReducer: ActionReducer<CentralStampState> = storeFreeze(combineReducers({layoutState: layoutReducer, eventTabState: eventTabReducer}));
// export const prodCSReducer: ActionReducer<CentralStampState> = combineReducers({layoutState: layoutReducer, eventTabState: eventTabReducer});

export const developmentCSReducer: ActionReducer<CentralStampState> = compose(storeFreeze, combineReducers)(centralStampState);//storeFreeze(combineReducers(centralStampState));
export const prodCSReducer: ActionReducer<CentralStampState> = combineReducers(centralStampState);
// export const reducerStore : ActionReducer<CentralStampState> = combineReducers({layoutState : layoutReducer});
//
// export function centralStampState(state: CentralStampState = INITIAL_CENTRALSTAMP_STATE, action : Action) {
//   return reducerStore(state, action);
// }

///


