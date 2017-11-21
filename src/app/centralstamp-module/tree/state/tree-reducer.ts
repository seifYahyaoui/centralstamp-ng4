import {Action} from "@ngrx/store";
import {TreeState, INITIAL_TREE_STATE} from "./tree-state";
/**
 * Created by seif on 11/14/17.
 */

export function TreeReducer(state: TreeState = INITIAL_TREE_STATE, action: Action) : TreeState {
  switch(action.type){
    case 'action1':
      return state;
    default:
      return state;
  }
}
