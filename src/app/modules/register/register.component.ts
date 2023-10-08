import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../user/services/country.service';
import { City, Country } from '../user/model/address';
import { User } from '../user/model/user';
import { Router } from '@angular/router';
import { UserService } from '../user/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  Icountry: Country[] = []
  id?: string
  IpostalCode?: number[] = []
  country: Country = new Country
  user: User = new User
  
  validationPerformed: { [key: string]: boolean } = {};
  ngOnInit(): void {
    this.prepareForm()
    this.countryService.getAll().subscribe(res => this.Icountry = res)
  }
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private countryService: CountryService,
    private router: Router
  ) { }

  getCity(event: any) {
    this.IpostalCode = []
    this.id = this.Icountry.find(x => x.name === event.target.value)?.id
    this.id ? this.countryService.getById(this.id).subscribe(res =>
      this.country = res
    ) : false
  }
  getPostal_Code(event: any) {
    this.IpostalCode = this.country.city.find(x => x.name == event.target.value)?.postal_code
  }

  ValidateName(c: AbstractControl): { [key: string]: boolean } | null {
    const pattern = /^[A-Z]+[a-z]+[0-9]$/;
    if (!pattern.test(c.value)) {
      return { 'username': true };
    }
   return null;

  }
  prepareForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required,this.ValidateName]],
      surname: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      address: this.fb.group({
        city: ["", Validators.required],
        country: ["", Validators.required],
        postal_code: ["", Validators.required],
      })

    })
  }

  ValidateInput(controlName: string): string {
    if (this.registerForm.get(controlName)?.touched) {
      if (!this.validationPerformed[controlName]) {
        this.validationPerformed[controlName] = true;
        console.log(controlName)
        const control = this.registerForm.get(controlName)
        return (control?.dirty || control?.touched) && control?.valid ? 'input-valid' : 'input-invalid'
      }
      return (this.registerForm.get(controlName)?.dirty || this.registerForm.get(controlName)?.touched) && this.registerForm.get(controlName)?.valid ? 'input-valid' : 'input-invalid'
    }
    else {
      return ''
    }

  }
  /* validateName(): ValidatorFn {
     return (c: AbstractControl): { [key: string]: boolean } | null => {
       let n: boolean = false
       if (c.value.Validators.pattern("^[A-Z0-9]+[a-z0-9],{1,6}$")) {
         this.userService.getAll().subscribe(
           x => x.find(x => x.userName === c.value) ? n = true : n = false
         )
         return n ? { 'isValid': true } : null
       }
       return null
     }
   }
  */
  register() {
    if (this.registerForm.valid) {
      this.user = new User(this.registerForm.value)
      this.userService.add(this.user).subscribe(
        (res: any) => { alert("Perfectly was add"), this.router.navigate(['/login']) },
        (err: any) => { this.registerForm.reset() }
      )
    }
    console.trace()
    console.log(this.registerForm.valid)
  }
}

