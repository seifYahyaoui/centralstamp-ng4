import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitLayoutColumnComponent } from './split-layout-column.component';

describe('SplitLayoutColumnComponent', () => {
  let component: SplitLayoutColumnComponent;
  let fixture: ComponentFixture<SplitLayoutColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitLayoutColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitLayoutColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
