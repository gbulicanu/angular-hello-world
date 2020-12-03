import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite = false;

  constructor() { }

  onClick($event) {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
  }

}
