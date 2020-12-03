import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('is-favorite') isFavorite = false;
  // tslint:disable-next-line:no-output-rename
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
