import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantprofileComponent } from './merchantprofile.component';

describe('MerchantprofileComponent', () => {
  let component: MerchantprofileComponent;
  let fixture: ComponentFixture<MerchantprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
