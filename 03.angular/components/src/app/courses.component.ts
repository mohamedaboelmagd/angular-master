import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    // template: '<h2>{{ "Title: "+ title }}</h2>'
    template: `
                <h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>`
})
export class CoursesComponent {
    title = 'List of courses';
    courses = ['course1', 'course2', 'course3'];

    constructor(service: CoursesService){ // needs add this class in provider at app.module
        // let service = new CoursesService(); //don't need to add this class in provider at app.module
        this.courses = service.getCourses();
    }
    getTitle() {
        return this.title;
    }
}