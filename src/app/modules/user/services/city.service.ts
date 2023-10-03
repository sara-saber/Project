
import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/modules/shared/services/resource.service';
import { City } from '../model/address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService extends ResourceService<City>{
  constructor(http: HttpClient) {
    super(http, City, 'http://localhost:3000/city')
  }
  /*getAllBy(name: string,value:string): Observable<City[]> {
    return this.getQuery('http://localhost:3000/city',name,value)
  }*/
/* getBy(name: string,value:string): Observable<City> {
    return this.getQuery('http://localhost:3000/city',name,value)
  }*/
  /*getCounry(country_id: string): Observable<City[]> {
    const url = `http://localhost:3000/city?country_id=${country_id}`;
    return this.getRequest<City[]>(url)
  }*/

}
