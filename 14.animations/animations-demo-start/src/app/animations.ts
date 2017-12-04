import { trigger, transition, state, style, animate } from '@angular/animations';

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)' }),
        animate(500)
    ]),
    transition(':leave', [
        animate(500, style({ transform: 'translateX(-100%)' }))
    ]),
]);

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [// void <=> * // void => *, * => void
        animate(2000)
    ])
]);
