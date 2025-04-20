import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListDisplayComponent } from './profile-list-display.component';

describe('ProfileListDisplayComponent', () => {
  let component: ProfileListDisplayComponent;
  let fixture: ComponentFixture<ProfileListDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileListDisplayComponent]
    });
    fixture = TestBed.createComponent(ProfileListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
