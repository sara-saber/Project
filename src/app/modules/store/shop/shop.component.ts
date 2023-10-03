import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/modules/products/models/product';
import { ProductService } from 'src/app/modules/products/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  IProducts?: Product[]
  categoryName: any
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  
  }
  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (res: Product[]) => this.IProducts = res,
      (err: any) => console.log(err)
    )
    this.route.params.subscribe((params) => {
      params['category'] ? this.IProducts?.filter(x => x.categoryName = params['category']) : this.IProducts
    })
  }
}
