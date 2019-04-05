import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state, keyframes } from '@angular/animations'

@Component({
  selector: 'app-slidein-slide-out',
  templateUrl: './slidein-slide-out.component.html',
  styleUrls: ['./slidein-slide-out.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
      ]),
      trigger('flyInOut', [
        transition('void => *', [
          style({ transform : 'translateX(-10%)' }),
          animate('200ms'),
        ]),
        transition('* => void', [
          animate('200ms', style({ transform : 'translateX(-10%)' }))
        ])
      ]),
      trigger('flyInOut_1', [
        transition('void => *', [
          style({ transform : 'translateX(60%)' }),
          animate('200ms'),
        ]),
        transition('* => void', [
          animate('200ms', style({ transform : 'translateX(60%)' }))
        ])
      ]),
  
  ]

})
export class SlideinSlideOutComponent implements OnInit {
  state: string = 'small';
  showDiv: boolean = true;
  showDiv1: boolean = false;
  show:boolean = false;
  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

  toggleDiv() {
    this.showDiv = this.showDiv ? false : true;
    this.showDiv1 = this.showDiv1 ? false : true;

}
  constructor() { }

  ngOnInit() {
  }

}
