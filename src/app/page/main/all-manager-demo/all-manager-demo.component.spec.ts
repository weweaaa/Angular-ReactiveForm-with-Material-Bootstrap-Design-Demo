import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllManagerDemoComponent } from './all-manager-demo.component';

describe('AllManagerDemoComponent', () => {
  let component: AllManagerDemoComponent;
  let fixture: ComponentFixture<AllManagerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllManagerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllManagerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
