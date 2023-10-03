import { ProductService } from 'src/app/modules/products/services/product.service';
import { Product } from 'src/app/modules/products/models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

  ngOnInit(): void {
  }
  product:Product=new Product()
  constructor(private productService:ProductService,private router:ActivatedRoute){
  const id=this.router.snapshot.paramMap.get('id')
   /*this.productService.getById().subscribe(
      x=>this.product=x
    )*/
  }

 
}
