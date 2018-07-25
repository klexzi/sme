import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotprodcutComponent } from './hotprodcut.component';

describe('HotprodcutComponent', () => {
  let component: HotprodcutComponent;
  let fixture: ComponentFixture<HotprodcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotprodcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotprodcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
