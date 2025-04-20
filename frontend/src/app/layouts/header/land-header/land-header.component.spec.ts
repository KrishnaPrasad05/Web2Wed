import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHeaderComponent } from './land-header.component';

describe('LandHeaderComponent', () => {
  let component: LandHeaderComponent;
  let fixture: ComponentFixture<LandHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandHeaderComponent]
    });
    fixture = TestBed.createComponent(LandHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
