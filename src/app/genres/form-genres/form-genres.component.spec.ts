import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenresComponent } from './form-genres.component';

describe('FormGenresComponent', () => {
  let component: FormGenresComponent;
  let fixture: ComponentFixture<FormGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
