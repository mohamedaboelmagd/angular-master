import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { fromJS, Map } from 'immutable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>,
                devTools: DevToolsExtension) {
    const enhancer = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE), [], enhancer);
  }
}
