import { ConfirmService } from './../../shared/service/confirm.service';
import { Category } from 'src/app/modules/categories/models/category';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from '../../shared/service/shared.service';
import { ActivatedRoute } from '@angular/router';
import { error, param } from 'jquery';
import { R3SelectorScopeMode } from '@angular/compiler';

@Component({
  selector: 'app-category-edit-add',
  templateUrl: './category-edit-add.component.html',
  styleUrls: ['./category-edit-add.component.scss']
})
export class CategoryEditAddComponent implements OnInit {
  categoryModel!: FormGroup
  id!: string
  category: Category = new Category
  categoryIdNo:number[]=[10000,10001,10002,10003,10004]
  x:number=10004
  constructor(
    private services: SharedService,
    private route: ActivatedRoute,
    private confirmService: ConfirmService
  ) {
    this.route.params.pipe().subscribe(param =>
      this.id = param['id']
    )
  }
  ngOnInit(): void {
    this.defineModel()
    if (this.id !== '0') {
      this.getCategory()
    }


  }
  defineModel() {
    this.categoryModel = this.services.fb.group({
      categoryName: [''],
      description: [''],
      catgeoryImg: [''],
      categoryId: [''],
      isActive: ['']
    })
  }
  getCategory() {
    this.services.category.getById(this.id).subscribe(
      (res: Category) => {
        this.category = res,
          this.categoryModel = this.services.fb.group({
            ...this.category
          })
      }
    )
  }
  addCategory() {
    this.category = new Category(this.categoryModel.value)
    this.services.category.add(this.category).subscribe(
      (res: any) => { alert("Successfully added"), this.navigateRoute() },
      (err: any) => console.log(err)
    )
  }
  removeCategory() {
    this.confirmService.create("Are you Sure?").subscribe( 
    (res:any)=>this.services.category.delete(this.id).subscribe(res=> this.navigateRoute()),
    (err:any)=>console.log(err)
    )
  }
  updatCategory() {
    this.services.category.update(this.category).subscribe(
      (res: any) => { alert("Sucesssfully Updated"), this.navigateRoute() },
      (err: any) => { { alert("updated is Failed") } }
    )

  }
  save() {
    this.category = new Category(this.categoryModel.value)
    this.id === '0' ? this.addCategory() : this.updatCategory()
  }
  delete() {
    this.id === '0' ? this.categoryModel.reset() : this.removeCategory()

  }
  navigateRoute() {
    return this.services.router.navigate(['admin/dashboard/category'])
  }
  addID(){
    this.x+=1
    this.categoryIdNo.push(this.x)
  }
  minusID(){
    this.x-=1
    this.categoryIdNo.pop()
  }

}
