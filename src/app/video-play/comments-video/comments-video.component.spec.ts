import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsVideoComponent } from './comments-video.component';

describe('CommentsVideoComponent', () => {
  let component: CommentsVideoComponent;
  let fixture: ComponentFixture<CommentsVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
