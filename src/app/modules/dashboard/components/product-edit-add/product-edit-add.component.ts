
import { SharedService } from './../../shared/service/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modules/products/models/product';
import { Category } from 'src/app/modules/categories/models/category';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-edit-add',
  templateUrl: './product-edit-add.component.html',
  styleUrls: ['./product-edit-add.component.scss']
})
export class ProductEditAddComponent implements OnInit {
  id!: string
  imageName: String = ''
  productModel!: FormGroup
  selectedFile!: File
  product: Product = new Product
  Icategory: Category[] = []
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private services: SharedService) {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id']
    })

  }
  ngOnInit(): void {
    this.productModel = this.services.fb.group({
      productName: [""],
      productPrice: [""],
      productDetails: [""],
      categoryName: [""],
      productImg: this.services.fb.group({
        imgSrc: [""],
        imgAlt: [""]
      }),
      isActive: [""],
    })
    if (this.id !== '0') {
      this.getProduct()
    }
    this.services.category.getAll().subscribe(
      (res: any) => this.Icategory = res
    )
  }
  getProduct() {
    this.services.product.getById(this.id).subscribe(
      (res: Product) => {
        this.product = res,
          this.productModel = this.services.fb.group({
            ...this.product
          })
      }
    )
  }
  changeFile(event: any) {
    this.selectedFile = event.target.files[0]
  }
  uploadImage() {
    const formData = new FormData()
    formData.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('http://localhost:3000/images', formData).subscribe(
      res => { console.log(res) }
    )
  }

  save() {
    this.product = new Product(this.productModel.value)
    this.id === '0' ? this.addProduct() : this.updatedProduct()
  }
  delete() {
    this.id === '0' ? this.productModel.reset() : this.removeProduct(this.id)
  }
  addProduct() {
    const message = 'Are You sure?';
    this.services.confirmMessage.create(message).subscribe
      (res => {
        if (res) {
          this.services.product.add(this.product).subscribe(
            (res: any) => { alert("Product Sucessfully is added"), this.productModel.reset() },
            (err: any) => alert("there have some error please chick up ingo again"))
        }
      })
  }
  updatedProduct() {
    this.services.product.update(this.product).subscribe(
      (res: any) => { alert("Product Sucessfully is Update"), this.navigateRoute() },
      (err: any) => alert("You must fill all fileds")
    )
  }
  removeProduct(id: string) {
    const message = 'Are You sure to delete?';
    this.services.confirmMessage.create(message).subscribe
      (res => {
        if (res) {
          this.services.product.delete(id).subscribe(
            (res: any) => { console.log("Successfully remove it"), this.navigateRoute() },
            (err: any) => console.log("Faild to remove it")
          )
        }
      })
  }
  navigateRoute() {
    this.services.router.navigate(['admin/dashboard/product'])
  }
}
