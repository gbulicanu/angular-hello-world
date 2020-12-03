import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  isFavorite = false;

  constructor() { }

  onClick($event) {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
  }

}
