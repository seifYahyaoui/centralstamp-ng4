import {TreeZoneNode} from "../model/tree-model";
/**
 * Created by seif on 11/14/17.
 */

export interface TreeState {
zones : TreeZoneNode[]
}

export const INITIAL_TREE_STATE : TreeState = {
  zones : []
};
