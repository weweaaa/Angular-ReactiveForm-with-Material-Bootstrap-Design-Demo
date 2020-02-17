import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormControlsComponent } from './dialog-form-controls.component';

describe('DialogFormControlsComponent', () => {
  let component: DialogFormControlsComponent;
  let fixture: ComponentFixture<DialogFormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
