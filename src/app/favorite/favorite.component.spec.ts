import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be un-selected by default', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component.isFavorite).toBe(false);
    expect(compiled.querySelector('.bi-star-fill')).toBeNull();
  }));

  it('should be selected after click', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.onClick({});
    expect(component.isFavorite).toBe(true);
    expect(compiled.querySelector('.bi-star-fill')).toBeDefined();
  }));

  it('should be un-selected after 2 clicks', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.onClick({});
    component.onClick({});
    expect(component.isFavorite).toBe(false);
    expect(compiled.querySelector('.bi-star-fill')).toBeNull();
  }));
});
