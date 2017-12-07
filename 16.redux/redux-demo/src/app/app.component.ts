import { Map } from 'immutable';
import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select(s => s.get('counter')) count;

  constructor( private ngRedux: NgRedux<Map<string, any>> ) {

  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
