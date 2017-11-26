import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body',
    isLiked: false,
    likesCount: 0
  };

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('changes', eventArgs);
  };

}
