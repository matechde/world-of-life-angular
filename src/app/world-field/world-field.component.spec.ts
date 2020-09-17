import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldFieldComponent } from './world-field.component';

describe('WorldFieldComponent', () => {
  let component: WorldFieldComponent;
  let fixture: ComponentFixture<WorldFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
