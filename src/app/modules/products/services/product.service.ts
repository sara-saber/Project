import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<Product>{
  constructor(http:HttpClient) {
   // super(http,Product,'https://63dacb542af48a60a7d5eac3.mockapi.io/products');
   super(http,Product,'http://localhost:3000/product');
   }
}
