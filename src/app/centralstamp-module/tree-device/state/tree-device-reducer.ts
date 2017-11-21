import {Action} from "@ngrx/store";
import {TreeDeviceState, INITIAL_TREE_DEVICE_STATE} from "./tree-device-state";
/**
 * Created by seif on 11/14/17.
 */

export function TreeDeviceReducer(state: TreeDeviceState = INITIAL_TREE_DEVICE_STATE, action: Action) : TreeDeviceState {
  switch(action.type){
    case 'action1':
      return state;
    default:
      return state;
  }
}
