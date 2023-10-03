import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingDiscountComponent } from './shoping-discount.component';

describe('ShopingDiscountComponent', () => {
  let component: ShopingDiscountComponent;
  let fixture: ComponentFixture<ShopingDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
