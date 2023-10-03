import { Country } from '../model/address';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/modules/shared/services/resource.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends ResourceService<Country> {

  constructor(http:HttpClient) {
    super(http,Country,'http://localhost:3000/country')
   }
}
