import {Input, Directive} from "@angular/core";
/**
 * Created by seif on 10/20/17.
 */

@Directive({
  selector: '[var]',
  exportAs: 'var'
})
export class VarDirective {
  @Input() var:any;
}
