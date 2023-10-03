import { CartService } from './../../../shoping-cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/modules/products/services/product.service';
import { Product } from 'src/app/modules/products/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id!: string
  quantity: number=1
  product: Product=new Product()
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private cartServices: CartService) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
  }

  ngOnInit() {
    this.getProduct(this.id)
    //this.product?console.log(this.product):this.router.navigate(['home'])
  }

  getProduct(id: string) {
    this.productService.getById(id).subscribe(
      x => {
        this.product = x
      }
    )
  }
  addProductToCart(product: Product) {
    this.cartServices.addToCart(product)
    return this.router.navigate(['cart'])
  }
  increase(n: number) {
   this.quantity += 1
   this.product.productPrice*=this.quantity
  }
  decrease(n: number) {
    this.product.productPrice/=this.quantity
    this.quantity==1?this.quantity=1:this.quantity -= 1
  }
}
