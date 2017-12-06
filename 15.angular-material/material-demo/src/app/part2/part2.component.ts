import { EditCourseComponent } from './../edit-course/edit-course.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {

  progress = 0;
  timer;
  loading = false;
  constructor(private dialog: MatDialog) {
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

  openDialog() {
    this.dialog.open(EditCourseComponent)
        .afterClosed()
        .subscribe(result => console.log(result));
  }

}
