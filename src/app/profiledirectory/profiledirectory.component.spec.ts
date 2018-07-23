import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledirectoryComponent } from './profiledirectory.component';

describe('ProfiledirectoryComponent', () => {
  let component: ProfiledirectoryComponent;
  let fixture: ComponentFixture<ProfiledirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
