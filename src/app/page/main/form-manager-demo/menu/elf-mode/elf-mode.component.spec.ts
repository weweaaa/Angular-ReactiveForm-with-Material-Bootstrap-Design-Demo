import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfModeComponent } from './elf-mode.component';

describe('ElfModeComponent', () => {
  let component: ElfModeComponent;
  let fixture: ComponentFixture<ElfModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElfModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElfModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
