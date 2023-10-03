import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modules/categories/models/category';
import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { Product } from 'src/app/modules/products/models/product';
import { ProductWithPaginateService } from 'src/app/modules/products/services/product-with-paginate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Iproduct: Product[] = []
  ICategory: Category[] = []
  page: number = 1
  perPage?: number
  total:number=2
  constructor(private productwithPageService: ProductWithPaginateService, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(
      (res: Category[]) => this.ICategory = res,
      (err: any) => console.log(err)
    )
  }
  ngOnInit(): void {
    this.getProducts()

    /* this.productService.getAll().subscribe(
      (res:Product[])=>{
         return this.IProducts = res,console.log(this.IProducts)
       },
      (err:any)=>console.log(err)
     )*/
  }

  getProducts() {
    this.productwithPageService.getQuery('page', this.page).subscribe(
      res => { this.Iproduct = res.data, this.perPage = res.perPage}
    )
  }

  getCategory(name: string) {
    let categoryName;
    categoryName = name + ' col-lg-3 col-md-4 col-sm-6 mix ';
    return categoryName
  }
  changePage(event: number) {
    this.page = event
    console.log(this.page)
    this.getProducts()
  }


}
