import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { User } from 'src/app/modules/user/model/user';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-get-email',
  templateUrl: './get-email.component.html',
  styleUrls: ['./get-email.component.scss']
})
export class GetEmailComponent implements OnInit {

  email:FormControl=new FormControl
  validate:boolean=true
  user:User=new User
  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.email.valueChanges.subscribe(res=>
      this.validate=true
      )
  }
  constructor(
    private userServices: UserService,
    private lS: LocalStorageService,
    private route:Router
  ) { }

  getUser() {
    this.userServices.getQuery('email', this.email.value).subscribe(
      (res: User) => { 
        this.lS.set('user',res)      
      ,this.route.navigate(['restPassword/verficateEmail'])},
      (err: any) => this.validate=false
    )


  }

}
