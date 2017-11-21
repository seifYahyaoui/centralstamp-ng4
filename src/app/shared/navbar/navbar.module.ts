/**
 * Created by seif on 11/15/17.
 */
import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar.component";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarModule {

}
