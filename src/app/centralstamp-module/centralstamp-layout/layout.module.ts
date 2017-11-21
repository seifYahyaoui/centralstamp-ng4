/**
 * Created by seif on 11/15/17.
 */

import {NgModule} from "@angular/core";
import {providers} from "ng2-dnd";
import {SplitLayoutColumnComponent} from "./split-layout-column/split-layout-column.component";
import {LayoutComponent} from "./layout/layout.component";
import {CommonModule} from "@angular/common";
import {LayoutSettingsComponent} from "./layout-settings/layout-settings.component";
import {AngularSplitModule} from "angular-split/dist";
import {TreeModule} from "../tree/tree.module";
import {EventTabModule} from "../event-tab/event-tab.module";
import {EventTimelineModule} from "../event-timeline/event-timeline.module";
import {NavbarModule} from "../../shared/navbar/navbar.module";
@NgModule({
  declarations: [SplitLayoutColumnComponent,LayoutComponent,LayoutSettingsComponent],
  imports: [CommonModule, AngularSplitModule, TreeModule, EventTabModule, EventTimelineModule, NavbarModule],
  providers: [],
  exports: [LayoutComponent, LayoutSettingsComponent]
})
export class LayoutModule {

}
