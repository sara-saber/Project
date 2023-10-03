import { error } from 'jquery';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  password!: string
  passwordForm!: FormGroup
  fg!: FormGroup
  errorMsgClass!: string
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);


  ngOnInit(): void {
    if (this.passwordForm?.valid) {
      this.passwordForm = this.fb.group({
        password: [''],
        confirmPassword: ['']
      },
        {
          validators: this.ValidatePassword('password','confirmPassword')
        }
      )
    }
  
  }

  ValidatePassword(p: string, cp: string) {

    if (this.fg.controls[p].errors) {
   
    }
    else if(this.fg.controls[p]!==this.fg.controls[cp]){
      this.fg.controls[cp].setErrors({ confirmedValidator: true })
    }
  }
  constructor(
    private lS: LocalStorageService,
    private fb: FormBuilder
  ) { }
  save() {
    this.lS.get('user')
  }
}
