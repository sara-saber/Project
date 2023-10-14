

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../user/model/user';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, Country } from 'src/app/modules/user/model/address';

import { CountryService } from 'src/app/modules/user/services/country.service';
import { UserService } from 'src/app/modules/user/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = new User()
  Iuser: User[] = []
  Icountry: Country[] = []
  country: Country = new Country
  postalCode: any
  pageName: string = "Users"
  userModel!: FormGroup
  butTxt: string = 'add'
  userFormVisible = false
  userViewVisible = false
  eyeVisible: boolean[] = []
  phoneVisible = false
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private CountryService: CountryService) {
  }
  ngOnInit(): void {
    this.getAllUser()
    this.defineModel()
    this.user.address = new Address()
  }
  getAllUser() {
    this.userService.getAll().subscribe((res: User[]) => {
      this.Iuser = res
    }
    )
  }
  getUser(id: any) {
    this.userService.getById(id).subscribe((res: User) => {
      this.user = res
    })
  }
  getAllCountry() {
    this.CountryService.getAll().subscribe(res => { this.Icountry = res })

  }
  defineModel() {
    this.userModel = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      address: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        postal_code: ['']
      })
    })
  }
  sendNotification(controlName: string, event: any) {
    if (event.target.value == 'phone') {
      this.phoneVisible = !this.phoneVisible
    }
    if (controlName == 'phone' && event.target.checked) {
      this.userModel.get(controlName)?.setValidators(Validators.required)
    }

  }


  showForm(id: any) {
    this.getAllCountry()
    this.userFormVisible === false ?
      (
        this.butTxt = "Cancel",
        id === '0' ?
          (
            this.userModel.reset(),
            this.user.id = '0'
          )
          :
          (
            this.userService.getById(id).subscribe(res => {
              this.user = res,
                console.log(res),
                this.userModel = this.fb.group({
                  ...this.user,
                  address: this.fb.group({
                    country: this.user.address.country,
                    city: this.user.address.city,
                    postal_code: this.user.address.postal_code
                  })
                })
              this.CountryService.getQuery('name', this.userModel.get('address.country')?.value).subscribe(
                (res) => {
                  this.country = res,
                    this.postalCode = this.country.city.find(city => city.name === this.userModel.get('address.city')?.value)?.postal_code
                  //  console.log(this.postalCode)
                }
              )
            })
          ),
        this.userFormVisible = !this.userFormVisible
      )

      :
      (this.userFormVisible = !this.userFormVisible,
        this.butTxt = "Add")
  }
  viewUser(id: any, index: number) {
    this.getUser(id)
    this.userViewVisible = !this.userViewVisible
    this.eyeVisible[index] = !this.eyeVisible[index]
  }
  addUser() {
    if (this.userModel.valid) {
      this.user = new User(this.userModel.value)
      this.userService.add(this.user).subscribe(
        (res: any) => { alert("Suceessfully added"), this.userModel.reset(), this.getAllUser() },
        (err: any) => { alert("Faild") }
      )
    }
  }

  removeUser(id: any) {
    this.userService.delete(id).subscribe(
      (res: any) => {
        const index = this.Iuser.indexOf(id)
        this.Iuser.splice(index)
      },
      (err: any) => alert("Faild")
    )
  }
  updateUser() {
    this.user = new User(this.userModel.value)
    this.userService.update(this.user).subscribe(res => this.getAllUser())
  }
  save() {
    console.log(this.user.id)
    this.user.id === '0' ? this.addUser() : this.updateUser()
  }
  getCity(event: any) {
    this.CountryService.getQuery('name', event.target.value).subscribe(
      (res) => {
        this.country = res
      }
    )

  }
  getPostal_code(event: any) {
    this.postalCode = this.country.city.find(city => city.name === event.target.value)?.postal_code
  }
  classValidate(controlName: string): string {
    const c = this.userModel.get(controlName)
    if (c?.touched) {
      return c.errors ? 'input-invalid ' : 'input-valid '
    }
    return ''
  }



}
