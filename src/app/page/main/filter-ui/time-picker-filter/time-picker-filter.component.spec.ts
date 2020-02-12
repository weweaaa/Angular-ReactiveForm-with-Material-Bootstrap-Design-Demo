import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerFilterComponent } from './time-picker-filter.component';

describe('TimePickerFilterComponent', () => {
  let component: TimePickerFilterComponent;
  let fixture: ComponentFixture<TimePickerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
