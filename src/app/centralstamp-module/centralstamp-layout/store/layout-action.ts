import {Action} from "@ngrx/store";
import {CSAction} from "../../../core/state/store/centralstamp-action";

export interface SplitConfigDimensionPayload {
  splitConfigId : number,
  sizesArray: Array<number>
}

export const UPDATE_SPLIT_CONFIG_DIMENSION = 'UPDATE_SPLIT_CONFIG_DIMENSION';
export class UpdateSplitConfigAction implements CSAction {
  readonly type = UPDATE_SPLIT_CONFIG_DIMENSION;
  constructor(public payload: SplitConfigDimensionPayload) {
  }

}
export const DISABLE_SPLIT_CONFIGURATION = 'DISABLE_SPLIT_CONFIGURATION';
export class DisableSplitConfigurationAction implements CSAction {
  readonly type = DISABLE_SPLIT_CONFIGURATION;
  // payload : splitconfigID disabled <= !disabled
  constructor(public payload: number) {
  }
}

export const UPDATE_SPLIT_AREA_VISIBILITY = 'UPDATE_SPLIT_AREA_VISIBILITY';
export class UpdateSplitAreaVisibilityAction implements CSAction {
  readonly type = UPDATE_SPLIT_AREA_VISIBILITY;
  constructor(public payload : boolean){

  }
}

export const RESTORE_DEFAULT_CONFIG_LAYOUT = 'RESTORE_DEFAULT_CONFIG_LAYOUT';
export class RestoreDefaultConfigLayoutAction {
  readonly type = UPDATE_SPLIT_AREA_VISIBILITY;
}
