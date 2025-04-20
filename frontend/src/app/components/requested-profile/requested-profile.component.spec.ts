import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedProfileComponent } from './requested-profile.component';

describe('RequestedProfileComponent', () => {
  let component: RequestedProfileComponent;
  let fixture: ComponentFixture<RequestedProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestedProfileComponent]
    });
    fixture = TestBed.createComponent(RequestedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
