import { error } from 'jquery';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/modules/user/model/user';
import { UserService } from 'src/app/modules/user/services/user.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  errorMsgClass!: string
  validate: boolean = true
  user!: User
  passwordForm!: FormGroup
  errorMessage!: string | null
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.user = new User(this.route.snapshot.data['user'])
    this.intialForm()
    this.passwordForm?.statusChanges.pipe(debounceTime(1000)).subscribe(res =>
      this.getMessage)
  }
  intialForm() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?;&])[A-Za-z\d@$!%*?;&]{6,}$/
      ),
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatch('password', 'confirmPassword') })
  }

  setMessage(c: AbstractControl): string | null {
    if (c.get('password')?.hasError('pattern')) {
      return 'Password must have at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long'
    }
    else if (c.hasError('match')) {
      return 'Password and Confirm Password must match'
    }
    return null
  }

  getMessage(): string | null {
    return this.errorMessage = this.setMessage(this.passwordForm)
  }
  passwordMatch(c1: string, c2: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const passwordControl = c.get(c1)
      const confirmPasswordControl = c.get(c2)
      if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
        return null
      }
      return passwordControl?.value !== confirmPasswordControl?.value ? { match: true } : null
    }
  }

  updatePassword() {
    this.user.password = this.passwordForm.get('password')?.value
    this.userService.update(this.user).subscribe(
      (res: any) => { this.router.navigate(['/login']) },
      (error: any) => console.error(error)
    )
  }

}
