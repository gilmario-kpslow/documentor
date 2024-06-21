import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatActionBarComponent } from './float-action-bar.component';

describe('FloatActionBarComponent', () => {
  let component: FloatActionBarComponent;
  let fixture: ComponentFixture<FloatActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatActionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
