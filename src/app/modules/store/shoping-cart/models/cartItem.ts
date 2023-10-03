import { Product } from "src/app/modules/products/models/product"


export class CartItem{
    constructor(product:Product){
        this.product=product
    }
   // product:Product=new Product()

    product:Product
    quantity:number=1

    get total():number{
        return this.product.productPrice * this.quantity
    }
}