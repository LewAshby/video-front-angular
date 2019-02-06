import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularVideosComponent } from './popular-videos.component';

describe('PopularVideosComponent', () => {
  let component: PopularVideosComponent;
  let fixture: ComponentFixture<PopularVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
