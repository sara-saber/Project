import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modules/categories/models/category';
import { CategoryService } from 'src/app/modules/categories/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  tableName!:string
  Icategory: Category[]=[]
  category:Category=new Category
  constructor(private categoryService: CategoryService,private activatedRoute:ActivatedRoute) {

    this.Icategory=this.activatedRoute.snapshot.data['categoryies']
  }
  ngOnInit(): void {
    this.tableName="Category"
    this.categoryService.getById('2').subscribe(
      (res:Category)=>{this.category=res}
    )
  
  }
}
