import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIntroComponent } from './profile-intro.component';

describe('ProfileIntroComponent', () => {
  let component: ProfileIntroComponent;
  let fixture: ComponentFixture<ProfileIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileIntroComponent]
    });
    fixture = TestBed.createComponent(ProfileIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
