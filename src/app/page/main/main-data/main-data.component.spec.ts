import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDataComponent } from './main-data.component';

describe('MainDataComponent', () => {
  let component: MainDataComponent;
  let fixture: ComponentFixture<MainDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
