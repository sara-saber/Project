
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { ProductService } from 'src/app/modules/products/services/product.service';
import { ConfirmService } from './confirm.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private confirmService: ConfirmService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private routerService: Router
    ) { }

  get confirmMessage() {
    return this.confirmService
  }
  get fb() {
    return this.formBuilder
  }
  get product() {
    return this.productService
  }
  get category() {
    return this.categoryService
  }
  get router() {
    return this.routerService
  }


}
