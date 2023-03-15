import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormDisplayComponent } from './dynamic-form-display.component';

describe('DynamicFormDisplayComponent', () => {
  let component: DynamicFormDisplayComponent;
  let fixture: ComponentFixture<DynamicFormDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
