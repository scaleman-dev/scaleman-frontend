import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScalingGroupComponent } from './create-scaling-group.component';

describe('CreateScalingGroupComponent', () => {
  let component: CreateScalingGroupComponent;
  let fixture: ComponentFixture<CreateScalingGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateScalingGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScalingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
