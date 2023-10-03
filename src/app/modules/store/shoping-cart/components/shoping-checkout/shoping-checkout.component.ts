import { Cart } from './../../models/cart';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-checkout',
  templateUrl: './shoping-checkout.component.html',
  styleUrls: ['./shoping-checkout.component.scss']
})
export class ShopingCheckoutComponent implements OnInit {
  totalPrice: Number = 0
  ngOnInit(): void {
    this.cartService.totalPrice.subscribe(x => {
      this.totalPrice = x
    })
  }
  constructor(private cartService: CartService) {
    this.cartService.ChangeTotalPrice(this.cartService.getCart().totalPrice)
  }


}
