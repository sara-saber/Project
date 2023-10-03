import { CartItem } from "./cartItem";

export class Cart {
    items: CartItem[]=[]
    get totalPrice(): Number {
        let totalPrice = 0
        this.items.forEach(
            i => {
                totalPrice += i.total
            })
        return totalPrice;
    }
}