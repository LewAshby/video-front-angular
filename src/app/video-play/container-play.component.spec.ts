import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPlayComponent } from './container-play.component';

describe('ContainerPlayComponent', () => {
  let component: ContainerPlayComponent;
  let fixture: ComponentFixture<ContainerPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
