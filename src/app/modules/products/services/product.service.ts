import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<Product>{
  constructor(http:HttpClient) {
   super(http,Product,'http://localhost:3000/product');
   }
}
