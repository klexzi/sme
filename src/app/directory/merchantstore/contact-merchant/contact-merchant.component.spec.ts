import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMerchantComponent } from './contact-merchant.component';

describe('ContactMerchantComponent', () => {
  let component: ContactMerchantComponent;
  let fixture: ComponentFixture<ContactMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
