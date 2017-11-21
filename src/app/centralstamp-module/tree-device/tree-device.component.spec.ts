import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDeviceComponent } from './tree-device.component';

describe('TreeDeviceComponent', () => {
  let component: TreeDeviceComponent;
  let fixture: ComponentFixture<TreeDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
