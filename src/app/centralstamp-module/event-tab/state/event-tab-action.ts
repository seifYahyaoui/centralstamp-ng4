import {CSAction} from "../../../core/state/store/centralstamp-action";
import {ReportData, ReportField} from "../model/dto/event-tab.model";
/**
 * Created by seif on 10/10/17.
 */

export const LOAD_SUPPORTED_REPORT_FIELDS = 'LOAD_SUPPORTED_REPORT_FIELDS';
export class LoadSupportedReportFieldsAction implements CSAction {
  readonly type = LOAD_SUPPORTED_REPORT_FIELDS;
  constructor(payload : ReportField[]) {
  }
}
