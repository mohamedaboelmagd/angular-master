import { Component, Input } from '@angular/core';
import { trigger, transition, state, style, animate, animation,
  keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        paddingTop: 0,
        paddingBottom: 0,
        height: 0,
        overflow: 'hidden'
      })),
      transition('collapsed => expanded', [
        animate('300ms ease-out')
      ]),
      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ]),
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
