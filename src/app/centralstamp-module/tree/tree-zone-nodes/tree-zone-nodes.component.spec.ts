import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeZoneNodesComponent } from './tree-zone-nodes.component';

describe('TreeZoneNodesComponent', () => {
  let component: TreeZoneNodesComponent;
  let fixture: ComponentFixture<TreeZoneNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeZoneNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeZoneNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
