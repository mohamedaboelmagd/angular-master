import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = true;

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

  color = 2;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' }
  ];

  progress = 0;
  timer;
  loading = false;

  constructor() {
    this.loading = true;
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 200);
    this.getCourses().subscribe(x => this.loading = false);
  }

  onChange($event) {
    console.log($event);
  }

  selected(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => c['selected'] = false);

    category['selected'] = !category['selected'];
  }

  getCourses() {
    return Observable.timer(2000);
  }
}
