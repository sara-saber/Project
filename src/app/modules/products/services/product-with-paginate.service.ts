
import { ResourceService } from 'src/app/modules/shared/services/resource.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductWithPage } from '../models/productwithPaginate';

@Injectable({
  providedIn: 'root'
})
export class ProductWithPaginateService extends ResourceService<ProductWithPage>{
  constructor(http: HttpClient) {
    super(http, ProductWithPage, 'http://localhost:3000/productwithPage')
  }
}
