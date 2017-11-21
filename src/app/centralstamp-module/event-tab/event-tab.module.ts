/**
 * Created by seif on 11/14/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventTabComponent} from "./event-tab.component";
import {ReportService} from "./service/report.service";
import {DndModule} from "ng2-dnd";
import {FormsModule} from "@angular/forms";
import {VarDirective} from "./directive/var-directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DndModule.forRoot()
  ],
  declarations: [
    EventTabComponent,
    VarDirective
  ],
  providers: [ReportService],
  exports: [EventTabComponent, VarDirective]
})
export class EventTabModule { }
