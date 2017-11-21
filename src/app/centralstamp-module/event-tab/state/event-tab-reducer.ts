import {EventTabState, EVENT_TAB_INITIAL_STATE} from "./event-tab-state";
import {CSAction} from "../../../core/state/store/centralstamp-action";
import {LOAD_SUPPORTED_REPORT_FIELDS} from "./event-tab-action";
/**
 * Created by seif on 10/10/17.
 */

export function eventTabReducer(state: EventTabState = EVENT_TAB_INITIAL_STATE, action: CSAction): EventTabState {
  switch (action.type) {
    case LOAD_SUPPORTED_REPORT_FIELDS:
          return state;
    default:
      return state;
  }
}
