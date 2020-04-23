import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import {Category} from './category.model'

@Component({
  selector: 'mt-category',
  templateUrl: './category.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CategoryComponent implements OnInit {

  restaurantState = 'ready'

  @Input() category: Category

  constructor() { }

  ngOnInit() {
  }

}
