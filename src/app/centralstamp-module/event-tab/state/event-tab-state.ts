import {ReportData} from "../model/dto/event-tab.model";
/**
 * Created by seif on 10/10/17.
 */

export interface EventTabState {
 suuportedReportFields : string [],
  reportsStructure : ReportData[]
}

export const EVENT_TAB_INITIAL_STATE : EventTabState = {
  suuportedReportFields : [],
  reportsStructure : []
}
