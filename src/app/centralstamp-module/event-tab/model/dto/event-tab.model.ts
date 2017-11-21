/**
 * Created by seif on 10/10/17.
 */
export interface ReportData {
  title : string;
  fields : {[key: string]: ReportField}
}

export interface ReportField {
  name :string;
  type: any;
  formula? : string;
}
