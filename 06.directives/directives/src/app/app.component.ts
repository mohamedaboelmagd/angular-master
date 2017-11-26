import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2];

  viewMode = 'map';

  coursesObjs;

  isSelected = true;

  onAdd() {
    this.coursesObjs.push({ id: 4, name: 'course4' });
  }
  onRemove(course) {
    const index = this.coursesObjs.indexOf(course);
    this.coursesObjs.splice(index, 1);
  }
  onChange(course) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.coursesObjs = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ];
  }
  trackCourses(index, course) {
    return course ? course.id : undefined;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
