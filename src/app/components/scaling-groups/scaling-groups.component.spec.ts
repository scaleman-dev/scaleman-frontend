import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalingGroupsComponent } from './scaling-groups.component';

describe('ScalingGroupsComponent', () => {
  let component: ScalingGroupsComponent;
  let fixture: ComponentFixture<ScalingGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalingGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalingGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
