import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Image } from '../models/image-model';

@Injectable({
  providedIn: 'root'
})
export class ImageService{

  constructor(private http: HttpClient) { }

  uploadImage(data: any){
    console.log(data)
    return this.http.post('http://localhost:3000/images', data).pipe(
      tap(res=>console.log(res))
    )
  }
  getImage(){

  }

}
