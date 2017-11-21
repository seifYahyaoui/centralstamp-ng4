import {NgModule} from "@angular/core";
import {TreeComponent} from "./tree.component";
import {PopupDirective} from "./directive/popup.directive";
import {TreeZoneNodesComponent} from "./tree-zone-nodes/tree-zone-nodes.component";
import {CommonModule} from "@angular/common";
/**
 * Created by seif on 11/14/17.
 */
@NgModule({
  imports: [CommonModule],
  declarations:[
    TreeComponent,
    PopupDirective,
    TreeZoneNodesComponent
  ],
  providers: [],
  exports: [TreeComponent, PopupDirective]
})
export class TreeModule{

}
