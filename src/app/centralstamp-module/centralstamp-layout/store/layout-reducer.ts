import {INITIAL_LAYOUT_STATE, LayoutState} from "./layout-state";
import * as _ from "lodash";
import {
  DISABLE_SPLIT_CONFIGURATION, RESTORE_DEFAULT_CONFIG_LAYOUT, SplitConfigDimensionPayload,
  UPDATE_SPLIT_AREA_VISIBILITY,
  UPDATE_SPLIT_CONFIG_DIMENSION, UpdateSplitConfigAction
} from "./layout-action";
import {ISplitArea} from "../model/split-area-model";
import {ISplitConfig} from "../model/split-config-model";
import {Action} from "@ngrx/store";
import {CSAction} from "../../../core/state/store/centralstamp-action";

export function layoutReducer(state: LayoutState = INITIAL_LAYOUT_STATE, action: Action) : LayoutState{

  switch (action.type){
    case UPDATE_SPLIT_CONFIG_DIMENSION :
      return updateSplitConfigDimension(state, action);
    case DISABLE_SPLIT_CONFIGURATION:
      return state;
    case UPDATE_SPLIT_AREA_VISIBILITY :
      return state;
    case RESTORE_DEFAULT_CONFIG_LAYOUT :
      return state;
    default:
      return state;
  }
}

function updateSplitConfigDimension(state: LayoutState, action: CSAction): LayoutState {
  const splitID = (<SplitConfigDimensionPayload> action.payload).splitConfigId;
  const sizesArray = (<SplitConfigDimensionPayload> action.payload).sizesArray;
  let newState = _.cloneDeep(state);// never use this _.cloneDeep(state);!!!
  updateLayoutConfig(splitID, sizesArray, newState.splitConfig);
  return newState;
}

// allow this function to change directly the state for performance purposes!!!!
export function updateLayoutConfig(columnindex: number, sizesArray: Array<number>, layoutConfig : ISplitConfig) {

  if(layoutConfig.splitColumnId === columnindex && layoutConfig.splitAreas){
    let newLayoutAreas :ISplitArea[] = [];

    layoutConfig.splitAreas.forEach((row, index) => {
      // let area : ISplitArea = {
      //   splitPanelType : row.splitPanelType,split: row.split ,size: sizesArray[index] ,order: row.order , visible :row.visible
      // };
      let size = sizesArray[index];
      row.size = size;
      //newLayoutAreas.push(area);
    });
    //layoutConfig.splitAreas = newLayoutAreas;
  } else{
    layoutConfig.splitAreas.filter(row => row.split).forEach(row => updateLayoutConfig(columnindex, sizesArray, row.split));
  }

}
