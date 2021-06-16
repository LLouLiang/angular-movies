import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieThreaterComponent } from './create-movie-threater.component';

describe('CreateMovieThreaterComponent', () => {
  let component: CreateMovieThreaterComponent;
  let fixture: ComponentFixture<CreateMovieThreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMovieThreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieThreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
