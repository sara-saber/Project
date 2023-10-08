import { LocalStorageService } from './../shared/services/local-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user/services/user.service';
import { User } from '../user/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel!: FormGroup;
  x: any
  message!: string
  error: boolean = false

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private lS: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.lS.get('user')) {
      this.setTrue()
      this.router.navigate(["admin/dahboard"])
    }
    else {
      this.loginModel = this.fb.group({
        username: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.required]]
      })
    }

  }
  login() {
    let model = this.loginModel.value
    if (model.username && model.password) {
      this.userService.getQuery('userName', model.username).subscribe(
        (res: User) => {
          res.password === model.password ?
            res.isActive === true ?
              (this.setTrue(), this.lS.set('user', res), this.router.navigate(["admin/dashboard"]), console.clear())
              : (this.setFalse(), console.trace(), alert("You Are Not An Active User"))
            : (this.setFalse(), alert("Your Password is Wrong write again!!"), this.loginModel.get('password')?.reset())
        },
        (err: any) => (this.setFalse(), alert("You dont have Account register Now"), this.router.navigate(["/register"]))
      )
    }
    else {
      alert("please write your username and password")
      console.clear()
    }
  }

  setTrue() {
    return this.authService.setAuth(true)
  }
  setFalse() {
    return this.authService.setAuth(false)
  }
  resetPassword() {

  }

}
