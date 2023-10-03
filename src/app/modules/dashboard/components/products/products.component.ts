import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product';
import { ProductService } from 'src/app/modules/products/services/product.service';
import { Image } from 'src/app/modules/shared/models/image-model';
import { Category } from 'src/app/modules/categories/models/category';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/modules/shared/services/image.service';
import { error } from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  tableName?: string
  Iproduct: Product[] = []
  Icategory: Category[] = []
  product: Product = new Product
  productModel!: FormGroup
  file!: File
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private imageServie: ImageService) {
    this.Iproduct = this.activatedRoute.snapshot.data['products']
    this.product.productImg = new Image
    this.categoryService.getAll().subscribe(res => {
      this.Icategory = res
    })
  }
  ngOnInit(): void {
    this.tableName = "Products"
    this.defineModel()
    console.table(this.Iproduct)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.


  }
  getAllProduct() {
    this.productService.getAll().subscribe(
      (res: Product[]) => { this.Iproduct = res }
    )
  }
  trackByProduct(index: number, product: Product) {
    return product.id
  }
  defineModel() {
    this.productModel = this.fb.group({
      productName: [''],
      productPrice: [''],
      productDetails: [''],
      categoryName: [''],
      isActive: [''],
      productImg: this.fb.group({
        imgSrc: [''],
        imgAlt: ['']
      })
    })
  }

  removeProduct(id: any) {
    this.productService.delete(id).subscribe(res => {
      const index = this.Iproduct.indexOf(id)
      this.Iproduct.splice(index)
    })
  }
  showProduct(id: any) {
    this.productService.getById(id).subscribe(res => {
      this.product = res
    })
  }
  getProduct(id: any) {
    id === '0' ?
      (
        this.defineModel(),
        this.productModel.reset(),
        console.log(this.productModel.value)
      )
      :
      (
        this.productService.getById(id).subscribe(res => {
          this.product = res,
            this.productModel = this.fb.group({
              ...this.product
            })
        })
      )
  }
  save(product: Product) {
    product.id === '0' ? this.addProduct() : this.updateProduct()
  }
  updateProduct() {
    //  this.uploadImage()
    this.product = new Product(this.productModel.value)
    this.productService.update(this.product).subscribe(res => {
      this.productService.getAll().subscribe(res => this.Iproduct = res)
    })

  }
  addProduct() {
    this.productModel.valid ?
      this.productModel.dirty ?
        this.product = this.productModel.value :
        (
          this.product = new Product(this.productModel.value),
          this.product.createdAt = new Date,
          this.productService.add(this.product).subscribe(
            {
              next: () => (alert("Suceessfully added"), this.OnSaveComplete()),
              error: () => console.log(error)
            }))
      :
      console.log("")
  }
  onSelect(event: any) {
    this.file = event.target.files[0]
  }

  uploadImage() {
    const formData = new FormData()
    formData.append('Image', this.file)
    this.imageServie.uploadImage(formData).subscribe(res =>
      console.log(res))
  }

  OnSaveComplete() {
    this.productModel.reset()
    this.getAllProduct()
  }
}
