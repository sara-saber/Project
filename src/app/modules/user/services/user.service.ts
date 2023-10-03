import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/modules/shared/services/resource.service';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {

  constructor(http: HttpClient) {
    super(http, User, 'http://localhost:3000/user');
  }
}
