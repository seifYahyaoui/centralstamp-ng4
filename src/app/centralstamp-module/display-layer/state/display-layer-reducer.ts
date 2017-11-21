import {Action} from "@ngrx/store";
import {DisplayLayerState, INITIAL_DISPLAY_LAYER_STATE} from "./display-layer-state";
/**
 * Created by seif on 11/14/17.
 */

export function displayLayerReducer(state: DisplayLayerState = INITIAL_DISPLAY_LAYER_STATE, action: Action) : DisplayLayerState {
  switch(action.type){
    case 'action1':
      return state;
    default:
      return state;
  }
}
