import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  title = 'app works!';
  @Input('isFavorite') star;
  @Output() change = new EventEmitter();
  onClick() {
    this.star = !this.star;
    this.change.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
