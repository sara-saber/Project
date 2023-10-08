import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Resolve } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {
  user: User = new User
  resolve(): User {
    this.user = this.lS.get('user')
    this.lS.remove('user')
    return this.user
  }
  constructor(
    private lS: LocalStorageService
  ) { }
  checkUser(): boolean {
    return this.lS.get('user') ? true : false
  }

}
