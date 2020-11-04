import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

describe('CourseComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let service: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      providers: [{
        provide: CoursesService, useClass: MockCourse
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render subtitle with in a h2 tag containing courses count', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('2 Courses', 'Heading must contain number of course');
  }));
});

const COURSE_OBJECT_ONE = 'a';
const COURSE_OBJECT_TWO = 'b';

class MockCourse {
  public getCourses() {
    return [COURSE_OBJECT_ONE, COURSE_OBJECT_TWO];
  }
}
