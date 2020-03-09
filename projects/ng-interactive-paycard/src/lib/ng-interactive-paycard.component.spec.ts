import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInteractivePaycardComponent } from './ng-interactive-paycard.component';

describe('NgInteractivePaycardComponent', () => {
  let component: NgInteractivePaycardComponent;
  let fixture: ComponentFixture<NgInteractivePaycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgInteractivePaycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgInteractivePaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
