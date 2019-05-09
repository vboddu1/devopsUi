import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivepageComponent } from './retrivepage.component';

describe('RetrivepageComponent', () => {
  let component: RetrivepageComponent;
  let fixture: ComponentFixture<RetrivepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrivepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
