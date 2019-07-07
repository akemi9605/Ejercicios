import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoteaserComponent } from './videoteaser.component';

describe('VideoteaserComponent', () => {
  let component: VideoteaserComponent;
  let fixture: ComponentFixture<VideoteaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoteaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoteaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
