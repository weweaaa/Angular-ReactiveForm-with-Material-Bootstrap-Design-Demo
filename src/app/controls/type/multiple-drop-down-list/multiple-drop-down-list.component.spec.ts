import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDropDownListComponent } from './multiple-drop-down-list.component';

describe('MultipleDropDownListComponent', () => {
  let component: MultipleDropDownListComponent;
  let fixture: ComponentFixture<MultipleDropDownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleDropDownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleDropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
