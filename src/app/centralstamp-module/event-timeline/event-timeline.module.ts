/**
 * Created by seif on 11/14/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EventTimelineComponent} from "./event-timeline.component";
import {EventTabModule} from "../event-tab/event-tab.module";
@NgModule({
  imports: [CommonModule, EventTabModule],
  declarations:[
    EventTimelineComponent
  ],
  providers: [],
  exports: [EventTimelineComponent],

})
export class EventTimelineModule{

}
