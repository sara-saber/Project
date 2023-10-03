import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/products/models/product';
import { ProductService } from 'src/app/modules/products/services/product.service';
import { CartService } from 'src/app/modules/store/shoping-cart/services/cart.service';
import { LocalStorageService } from '../../services/local-storage.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Id: any
  product: Product = new Product();
  constructor(
    private lS:LocalStorageService,
    private router: Router,
    private productService: ProductService,
    private cartServices: CartService
  ) { }
  ngOnInit(): void {
    this.productService.getById(this.Id).subscribe(
      (res: any) => { this.product = res },
      (err: any) => console.log(err)
    )
  }
  addProductToCart(product: Product) {
    this.cartServices.addToCart(product)
    return this.router.navigate(['home/cart'])
  }
  showDetails(product: Product) {
    return this.router.navigate(['home/' + product.id])
  }
}
