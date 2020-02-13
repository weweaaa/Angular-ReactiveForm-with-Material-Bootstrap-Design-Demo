import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFilterComponent } from './slide-filter.component';

describe('SlideFilterComponent', () => {
  let component: SlideFilterComponent;
  let fixture: ComponentFixture<SlideFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
