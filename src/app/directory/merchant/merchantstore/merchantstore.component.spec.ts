import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantstoreComponent } from './merchantstore.component';

describe('MerchantstoreComponent', () => {
  let component: MerchantstoreComponent;
  let fixture: ComponentFixture<MerchantstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
