import {Action} from "@ngrx/store";

export interface CSAction extends Action {
  type : string;
  payload? : any;
}
