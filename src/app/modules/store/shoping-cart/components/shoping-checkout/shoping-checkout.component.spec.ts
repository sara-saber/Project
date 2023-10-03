import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCheckoutComponent } from './shoping-checkout.component';

describe('ShopingCheckoutComponent', () => {
  let component: ShopingCheckoutComponent;
  let fixture: ComponentFixture<ShopingCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
