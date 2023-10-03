import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modules/categories/models/category';
import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { ProductService } from 'src/app/modules/products/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  Icategory:Category[]=[]
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(
      (res: Category[]) => {this.Icategory=res}
    )
  }
  ngOnInit(): void {

  }

}
