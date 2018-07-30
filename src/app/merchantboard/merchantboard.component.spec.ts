import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantboardComponent } from './merchantboard.component';

describe('MerchantboardComponent', () => {
  let component: MerchantboardComponent;
  let fixture: ComponentFixture<MerchantboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
