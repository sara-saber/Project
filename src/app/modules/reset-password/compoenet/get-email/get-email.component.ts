import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { User } from 'src/app/modules/user/model/user';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-get-email',
  templateUrl: './get-email.component.html',
  styleUrls: ['./get-email.component.scss']
})
export class GetEmailComponent implements OnInit {
  email: string = ''
  ngOnInit(): void {

  }
  constructor(
    private userServices: UserService,
    private lS: LocalStorageService
  ) { }

  getUser() {
    console.log(this.email)
    this.userServices.getQuery('email', this.email).subscribe(
      (res: User) =>this.lS.set('userEmail',res.email),
      (err: any) => console.error(err)
    )


  }

}
