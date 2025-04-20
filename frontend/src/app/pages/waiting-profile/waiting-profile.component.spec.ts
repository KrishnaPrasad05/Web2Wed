import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingProfileComponent } from './waiting-profile.component';

describe('WaitingProfileComponent', () => {
  let component: WaitingProfileComponent;
  let fixture: ComponentFixture<WaitingProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitingProfileComponent]
    });
    fixture = TestBed.createComponent(WaitingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
