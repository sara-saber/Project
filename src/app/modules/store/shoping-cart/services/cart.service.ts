import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/modules/products/models/product';

import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private lS: LocalStorageService) { }
  private tpS: BehaviorSubject<Number> = new BehaviorSubject<Number>(10);
  totalPrice = this.tpS.asObservable()
  cart: Cart = new Cart()
  addToCart(product: Product) {
    let carditem = this.cart.items.find(x => x.product.id === product.id)
    if (carditem) {
      carditem.quantity += 1
      return
    }
    this.cart.items.push(new CartItem(product))
    this.cart = this.getCart()
    this.lS.set('cart',this.cart)

  }
  removeFromCart(product: Product) {
    let carditem = this.cart.items.findIndex(x => x.product.id === product.id)
    this.cart.items.splice(carditem, 1)
    return this.getCart()
  }
  getCart(): Cart {
    return this.cart
  }
  ChangeTotalPrice(totalPrice: Number) {
    this.tpS.next(totalPrice)
  }
}
