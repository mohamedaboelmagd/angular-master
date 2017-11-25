import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span (click)="onClick()" class="glyphicon" [class.glyphicon-star]="star" [class.glyphicon-star-empty]="!star"></span>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  star = true;
  onClick() {
    this.star = !this.star;
  }
}
