import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Filavideos3Component } from './filavideos3.component';

describe('Filavideos3Component', () => {
  let component: Filavideos3Component;
  let fixture: ComponentFixture<Filavideos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filavideos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filavideos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
