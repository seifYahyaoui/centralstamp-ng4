import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWorkflowComponent } from './event-workflow.component';

describe('EventWorkflowComponent', () => {
  let component: EventWorkflowComponent;
  let fixture: ComponentFixture<EventWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
