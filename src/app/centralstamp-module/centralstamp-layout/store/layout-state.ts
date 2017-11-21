
import {defaultLayoutSplitConfig} from "./default-layout-config";
import {ISplitConfig} from "../model/split-config-model";
import * as _ from "lodash";

export interface ScreenDimension {
  height: number;
  width: number
}

export interface LayoutState {
  splitConfig : ISplitConfig;
  screenDimension : ScreenDimension;
}

export const SCREEN_DIMENSION : ScreenDimension = {
  height: 0,
  width: 0
}

export const INITIAL_LAYOUT_STATE : LayoutState = {
  splitConfig : defaultLayoutSplitConfig,
  screenDimension : SCREEN_DIMENSION
}

