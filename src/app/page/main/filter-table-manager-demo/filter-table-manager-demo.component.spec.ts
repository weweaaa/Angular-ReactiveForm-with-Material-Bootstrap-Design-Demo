import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTableManagerDemoComponent } from './filter-table-manager-demo.component';

describe('FilterTableManagerDemoComponent', () => {
  let component: FilterTableManagerDemoComponent;
  let fixture: ComponentFixture<FilterTableManagerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTableManagerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTableManagerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
