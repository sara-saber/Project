import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartTableComponent } from './shoping-cart-table.component';

describe('ShopingCartTableComponent', () => {
  let component: ShopingCartTableComponent;
  let fixture: ComponentFixture<ShopingCartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCartTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
