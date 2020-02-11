import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUIComponent } from './filter-ui.component';

describe('FilterUIComponent', () => {
  let component: FilterUIComponent;
  let fixture: ComponentFixture<FilterUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
