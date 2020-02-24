import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableManagerDemoComponent } from './table-manager-demo.component';

describe('TableManagerDemoComponent', () => {
  let component: TableManagerDemoComponent;
  let fixture: ComponentFixture<TableManagerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableManagerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableManagerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
