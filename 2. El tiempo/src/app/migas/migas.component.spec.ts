import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigasComponent } from './migas.component';

describe('MigasComponent', () => {
  let component: MigasComponent;
  let fixture: ComponentFixture<MigasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
