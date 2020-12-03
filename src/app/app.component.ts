import { Component } from '@angular/core';
import { EventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: 'This is a post',
    isFavorite: true
  };

  onFavoriteChange(eventArgs: EventArgs) {
    console.log(`Favorite changed to ${eventArgs.newValue}.`);
  }
}
