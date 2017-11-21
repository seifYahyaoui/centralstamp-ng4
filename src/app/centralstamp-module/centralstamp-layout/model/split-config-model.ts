
import {CentralStampLayoutColumn, ISplitArea} from "./split-area-model";

export interface ISplitConfig {
  direction: string,
  disabled: boolean,
  gutterSize: number,
  splitAreas: ISplitArea[],
  splitColumnId : CentralStampLayoutColumn // must be unique
}
