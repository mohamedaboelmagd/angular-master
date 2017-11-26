import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  title = 'app works!';
  star = true;
  onClick() {
    this.star = !this.star;
  }

  constructor() { }

  ngOnInit() {
  }

}
