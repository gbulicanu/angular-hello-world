import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite = false;
  @Output() change = new EventEmitter;

  constructor() { }

  onClick($event) {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

  ngOnInit() {
  }

}
