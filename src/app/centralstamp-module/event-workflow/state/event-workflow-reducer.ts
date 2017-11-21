import {Action} from "@ngrx/store";
import {EventWorkflowState, INITIAL_EVENT_WORKFLOW_STATE} from "./event-workflow-state";
/**
 * Created by seif on 11/14/17.
 */

export function eventWorkflowReducer(state: EventWorkflowState = INITIAL_EVENT_WORKFLOW_STATE, action: Action) : EventWorkflowState {
  switch(action.type){
    case 'action1':
      return state;
    default:
      return state;
  }
}
