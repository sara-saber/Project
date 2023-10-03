import { Injectable } from '@angular/core';
import { UserService } from '../../user/services/user.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isActiv: boolean = false
  value: boolean = false
  loginSuccess = new BehaviorSubject<boolean>(false);
  constructor(private userservice: UserService,private lS:LocalStorageService) { }

  isAuth = this.loginSuccess.asObservable()

  setAuth(isAuthenticated: boolean) {
    this.loginSuccess.next(isAuthenticated);
  }
  isLoggedIn() {
   if( this.lS.get('user')){
    this.setAuth(true)
   }
    return this.loginSuccess.getValue()
  }
  


}
