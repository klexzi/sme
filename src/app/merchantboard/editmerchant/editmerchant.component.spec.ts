import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmerchantComponent } from './editmerchant.component';

describe('EditmerchantComponent', () => {
  let component: EditmerchantComponent;
  let fixture: ComponentFixture<EditmerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
