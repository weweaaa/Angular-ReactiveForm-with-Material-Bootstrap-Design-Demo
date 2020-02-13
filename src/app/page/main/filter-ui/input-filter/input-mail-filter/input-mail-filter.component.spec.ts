import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMailFilterComponent } from './input-mail-filter.component';

describe('InputMailFilterComponent', () => {
  let component: InputMailFilterComponent;
  let fixture: ComponentFixture<InputMailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
