import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenerComponent } from './create-gener.component';

describe('CreateGenerComponent', () => {
  let component: CreateGenerComponent;
  let fixture: ComponentFixture<CreateGenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
