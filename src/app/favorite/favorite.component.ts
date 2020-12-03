import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite = false;
  @Output('change') click = new EventEmitter;

  constructor() { }

  onClick($event) {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }

  ngOnInit() {
  }

}

export interface EventArgs {
  newValue: boolean;
}
