import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonFilterComponent } from './radio-button-filter.component';

describe('RadioButtonFilterComponent', () => {
  let component: RadioButtonFilterComponent;
  let fixture: ComponentFixture<RadioButtonFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
