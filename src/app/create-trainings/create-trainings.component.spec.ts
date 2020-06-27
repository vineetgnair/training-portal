import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTrainingsComponent } from './create-trainings.component';

describe('CreateTrainingsComponent', () => {
  let component: CreateTrainingsComponent;
  let fixture: ComponentFixture<CreateTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
