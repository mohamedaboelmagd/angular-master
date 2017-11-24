import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
                <h2>{{ title }}</h2>
                <h2 [textContent]="title"></h2>
                <img src="{{ imageURL }}"/>
                <img [src]="imageURL"/>
                
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan">25</td>
                    </tr>
                </table>`
})
export class CoursesComponent {
    title = 'List of courses';
    imageURL = 'http://lorempixel.com/400/400/';
    colSpan = 2;

    constructor() {

    }
}