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
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
      </ul>
      <button class="btn btn-primary" [class.active]="isActive">Save</button>
    </div>
  `
})
export class CoursesComponent {
  title = '';
  imageUrl = 'http://lorempixel.com/400/200';
  courses = [];
  colSpan = 2;
  isActive = true;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.title = `${this.courses.length} Courses`;
  }
}
