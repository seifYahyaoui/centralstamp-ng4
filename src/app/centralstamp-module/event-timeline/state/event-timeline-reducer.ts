import {EventTimelineState, INITIAL_EVENT_TIMELINE_STATE} from "./event-timeline-state";
import {Action} from "@ngrx/store";
/**
 * Created by seif on 11/14/17.
 */

export function eventTimelineReducer(state: EventTimelineState = INITIAL_EVENT_TIMELINE_STATE, action: Action) : EventTimelineState {
  switch(action.type){
    case 'action1':
      return state;
    default:
      return state;
  }
}
