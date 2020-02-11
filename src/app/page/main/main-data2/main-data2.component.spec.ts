import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainData2Component } from './main-data2.component';

describe('MainData2Component', () => {
  let component: MainData2Component;
  let fixture: ComponentFixture<MainData2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainData2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
