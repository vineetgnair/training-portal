import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainingsComponent } from './view-trainings.component';

describe('ViewTrainingsComponent', () => {
  let component: ViewTrainingsComponent;
  let fixture: ComponentFixture<ViewTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
