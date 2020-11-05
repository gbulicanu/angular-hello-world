import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <img [src]="imageUrl" />
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = '';
  imageUrl = 'http://lorempixel.com/400/200';
  courses = [];

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.title = `${this.courses.length} Courses`;
  }
}
