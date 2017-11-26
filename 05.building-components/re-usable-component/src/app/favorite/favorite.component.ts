import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  title = 'app works!';
  @Input('isFavorite') star;
  @Output('change') click = new EventEmitter();
  onClick() {
    this.star = !this.star;
    this.click.emit({ newValue: this.star });
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}