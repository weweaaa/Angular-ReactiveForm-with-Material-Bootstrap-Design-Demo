import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormManagerDemoComponent } from './form-manager-demo.component';

describe('FormManagerDemoComponent', () => {
  let component: FormManagerDemoComponent;
  let fixture: ComponentFixture<FormManagerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormManagerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormManagerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
