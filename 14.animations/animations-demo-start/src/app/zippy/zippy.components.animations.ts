import { trigger, transition, state, style, animate, animation,
    keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

export let expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({
      paddingTop: 0,
      paddingBottom: 0,
      height: 0,
      opacity: 0
    })),
    transition('collapsed => expanded', [
      animate('300ms ease-out', style({
        paddingTop: '*',
        paddingBottom: '*',
        height: '*'
      })),
      animate('1s', style({ opacity: 1 }))
    ]),
    transition('expanded => collapsed', [
      animate('300ms ease-in')
    ]),
  ]);
