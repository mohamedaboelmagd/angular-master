import { trigger, transition, state, style, animate, animation, keyframes, useAnimation } from '@angular/animations';

export let fadeInAnimation = animation([
        style({ opacity: 0 }),
        animate('{{ duration }} {{ easing }}')
    ], { params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
    ]))
);
export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)' }),
        animate(500)
    ]),
    transition(':leave',
        // animate('0.5s 1s ease-in', style({ transform: 'translateX(-100%)' }))
        useAnimation(bounceOutLeftAnimation)
    ),
]);

export let fade = trigger('fade', [
    // state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [// void <=> * // void => *, * => void
        // animate(2000),
        useAnimation(fadeInAnimation)
    ])
]);
