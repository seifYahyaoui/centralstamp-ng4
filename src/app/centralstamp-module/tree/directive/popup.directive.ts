/**
 * Created by seif on 11/2/17.
 */

import {Directive, Input, HostListener} from "@angular/core";
@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {
  @Input() message;
  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}
