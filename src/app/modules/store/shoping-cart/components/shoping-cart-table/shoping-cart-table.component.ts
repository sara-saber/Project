
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';

@Component({
  selector: 'app-shoping-cart-table',
  templateUrl: './shoping-cart-table.component.html',
  styleUrls: ['./shoping-cart-table.component.scss']
})
export class ShopingCartTableComponent implements OnInit {
  cart: Cart = new Cart()

  ngOnInit(): void {
    console.log()

  }
  constructor(private cartService: CartService,
    private lS: LocalStorageService) {
    if (this.lS.get('cart')) {
      this.cart = this.lS.get('cart')
    }
    else {
      this.cart = this.cartService.getCart()
      this.lS.set('cart',this.cart)
    }
  }

  removeItem(product: Product) {
    this.cart = this.cartService.removeFromCart(product)
    this.updateTotal()
  }
  increase(item: CartItem) {
    item.quantity += 1
    this.updateTotal()
  }
  decrease(item: CartItem) {
    item.quantity -= 1
    item.quantity ? 0 : this.removeItem(item.product);
    this.updateTotal()
  }
  updateTotal() {
    this.cartService.ChangeTotalPrice(this.cartService.getCart().totalPrice)
  }

}
