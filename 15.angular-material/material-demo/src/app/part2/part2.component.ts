import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {

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

  getCourses() {
    return Observable.timer(2000);
  }

}
