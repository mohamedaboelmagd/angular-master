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
                <input (keyup.enter)="onKeyUpV($event)"/>
                
                <input #email (keyup.enter)="onKeyUpV2(email.value)"/>
                
                <input [value]="emailx" (keyup.enter)="emailx = $event.target.value; onKeyUpV3()"/>
                <input [(ngModel)]="emailo" (keyup.enter)="onKeyUpV4()"/>`
})
export class CoursesComponent {
    title = 'List of courses';
    imageURL = 'http://lorempixel.com/100/100/';
    colSpan = 2;
    isActive = true;
    emailx = 'me@ex.com';
    emailo = 'mmm@mmm.mmm';

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
    onKeyUpV($event) {
        console.log('Enter pressed');
        console.log($event.target.value);
    }
    onKeyUpV2(value) {
        console.log(value);
    }
    onKeyUpV3() {
        console.log(this.emailx);
    }
    onKeyUpV4() {
        console.log(this.emailo);
    }
    constructor() {

    }
}