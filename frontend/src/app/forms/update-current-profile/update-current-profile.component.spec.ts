import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrentProfileComponent } from './update-current-profile.component';

describe('UpdateCurrentProfileComponent', () => {
  let component: UpdateCurrentProfileComponent;
  let fixture: ComponentFixture<UpdateCurrentProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCurrentProfileComponent]
    });
    fixture = TestBed.createComponent(UpdateCurrentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
