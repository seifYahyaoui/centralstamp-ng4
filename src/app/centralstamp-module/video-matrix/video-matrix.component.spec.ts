import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMatrixComponent } from './video-matrix.component';

describe('VideoMatrixComponent', () => {
  let component: VideoMatrixComponent;
  let fixture: ComponentFixture<VideoMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
