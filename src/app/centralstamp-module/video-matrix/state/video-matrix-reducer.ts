import {Action} from "@ngrx/store";
import {
  INITIAL_VIDEO_MATRIX_STATE,
  VideoMatrixState
} from "./video-matrix-state";
/**
 * Created by seif on 11/14/17.
 */

export function VideoMatrixReducer(state: VideoMatrixState = INITIAL_VIDEO_MATRIX_STATE, action: Action) : VideoMatrixState {
  switch(action.type){
    case 'action1':
      return state;
    default:
      return state;
  }
}
