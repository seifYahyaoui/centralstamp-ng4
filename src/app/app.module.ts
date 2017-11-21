import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TreeComponent } from './centralstamp-module/tree/tree.component';
import { Map2DComponent } from './centralstamp-module/display-layer/map-2-d.component';
import { VideoMatrixComponent } from './centralstamp-module/video-matrix/video-matrix.component';
import { EventWorkflowComponent } from './centralstamp-module/event-workflow/event-workflow.component';
import { EventTimelineComponent } from './centralstamp-module/event-timeline/event-timeline.component';
import { EventTabComponent } from './centralstamp-module/event-tab/event-tab.component';
import { TreeDeviceComponent } from './centralstamp-module/tree-device/tree-device.component';
import {AngularSplitModule} from "angular-split/dist";
import { LayoutComponent } from './centralstamp-module/centralstamp-layout/layout/layout.component';
import { SplitLayoutColumnComponent } from './centralstamp-module/centralstamp-layout/split-layout-column/split-layout-column.component';
import {Action, combineReducers, StoreModule} from "@ngrx/store";
import {centralStampState, developmentCSReducer, prodCSReducer} from "./core/state/store/centralstamp-reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {compose} from "@ngrx/core/compose";
import {layoutReducer} from "./centralstamp-module/centralstamp-layout/store/layout-reducer";
import {CentralStampState, INITIAL_CENTRALSTAMP_STATE} from "./core/state/store/centralstamp-state";
import {environment} from "../environments/environment";
import {storeFreeze} from "ngrx-store-freeze";
import { LayoutSettingsComponent } from './centralstamp-module/centralstamp-layout/layout-settings/layout-settings.component';
import {ReportService} from "./centralstamp-module/event-tab/service/report.service";
import {DndModule} from "ng2-dnd";
import {VarDirective} from "./centralstamp-module/event-tab/directive/var-directive";
import { TreeZoneNodesComponent } from './centralstamp-module/tree/tree-zone-nodes/tree-zone-nodes.component';
import {PopupDirective} from "./centralstamp-module/tree/directive/popup.directive";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptorService} from "./core/service/http-interceptor/token-interceptor.service";
import {AuthService} from "./core/service/auth/auth.service";
import { PageNotFoundComponent } from './login/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login-page/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutComponent } from './shared/about/about.component';
import {eventTabReducer} from "./centralstamp-module/event-tab/state/event-tab-reducer";
import {EventTabModule} from "./centralstamp-module/event-tab/event-tab.module";
import {TreeModule} from "./centralstamp-module/tree/tree.module";
import {EventTimelineModule} from "./centralstamp-module/event-timeline/event-timeline.module";
import {LayoutModule} from "./centralstamp-module/centralstamp-layout/layout.module";
import {NavbarModule} from "./shared/navbar/navbar.module";

//export const appReducerFactory = environment.production ? [layoutReducer]: [layoutReducer, storeFreeze] ;
//export const ReducerToken = new InjectionToken('Registered Reducers');



export function appReducer(state: any , action: any) {
  if (environment.production) {
    return prodCSReducer(state, action);
  } else {
    return developmentCSReducer(state, action);
  }
}

export interface  CentralStampStore {
  centralStampState : CentralStampState
}

export const reducer = {centralStampState: appReducer};

@NgModule({
  declarations: [
    AppComponent,

    Map2DComponent,
    VideoMatrixComponent,
    EventWorkflowComponent,

    TreeDeviceComponent,

    PageNotFoundComponent,
    LoginComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    StoreModule.provideStore(appReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    LayoutModule,
    EventTabModule,
    TreeModule,
    EventTimelineModule,
    NavbarModule
  ],
  providers: [
    AuthService,
   {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],

})
export class AppModule { }
