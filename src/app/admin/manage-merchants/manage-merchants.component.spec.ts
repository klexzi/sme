import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMerchantsComponent } from './manage-merchants.component';

describe('ManageMerchantsComponent', () => {
  let component: ManageMerchantsComponent;
  let fixture: ComponentFixture<ManageMerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
