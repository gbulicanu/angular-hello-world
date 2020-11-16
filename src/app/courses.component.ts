import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <div class="container">
      <img [src]="imageUrl" />
        <table>
          <tr>
            <td [attr.colspan]="colSpan"></td>
          </tr>
        </table>
      <h2 [style.backgroundColor]="isActive ? 'blue' : 'white'">{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
      </ul>
      <div (click)="onDivClick()">
        <button class="btn btn-primary"
          [class.active]="isActive"
          (click)="onClick($event)">Save</button>
      </div>
      <br />
      <input [(ngModel)]="email" (keyup.enter)="onEnter()" />
      <br />
      {{ text | summary:10 }}
    </div>
  `
})
export class CoursesComponent {
  title = '';
  imageUrl = 'http://lorempixel.com/400/200';
  courses = [];
  colSpan = 2;
  isActive = false;
  email = 'me@example.com';
  // tslint:disable-next-line:max-line-length
  text = 'Ut occaecat dolor ad enim est minim excepteur pariatur nostrud proident ex sunt velit aliqua. Voluptate incididunt nulla proident aliqua irure. Nostrud aliquip esse dolor esse. Labore cupidatat aliqua ad incididunt officia officia.';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.title = `${this.courses.length} Courses`;
  }

  onDivClick() {
    console.log('Div was clicked.');
  }

  onClick($event) {
    $event.stopPropagation();
    console.log('Save was clicked.', $event);
  }

  onEnter(value) {
    console.log(this.email);
  }
}
