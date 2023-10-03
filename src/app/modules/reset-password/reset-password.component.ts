import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  bgColor: string = 'bg-color-red'
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  navigate(router: string) {
    this.router.navigate(['/restPassword/' + router])
    router === 'verficateEmail' ? this.bgColor = 'bg-color-green' : (router === 'getEmail') ? this.bgColor = 'bg-color-red' : this.bgColor = 'bg-color-blue'
  }

}
