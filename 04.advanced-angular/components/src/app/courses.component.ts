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
                </table>
                
                <button class="btn btn-primary" [class.active]="isActive">Save</button>
                <button [style.backgroundColor]="isActive? 'blue':'red'">style</button>
                
                <div (click)="onDivClicked()">
                    <button (click)="onSave($event)">Save</button>
                </div>
                
                <input (keyup)="onKeyUp($event)"/>
                <input (keyup.enter)="onKeyUpV()"/>`
})
export class CoursesComponent {
    title = 'List of courses';
    imageURL = 'http://lorempixel.com/100/100/';
    colSpan = 2;
    isActive = true;

    onDivClicked() {
        console.log('Parent');
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('Button clicks', $event);
    }

    onKeyUp($event) {
        if ($event.keyCode === 13) console.log('Enter was pressed');
    }
    onKeyUpV() {
        console.log('Enter pressed');
    }
    constructor() {

    }
}