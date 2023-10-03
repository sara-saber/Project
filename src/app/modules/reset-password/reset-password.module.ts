import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { GetEmailComponent } from './compoenet/get-email/get-email.component';
import { NewPasswordComponent } from './compoenet/new-password/new-password.component';
import { VerificateEmailComponent } from './compoenet/verificate-email/verificate-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetEmailComponent,
    NewPasswordComponent,
    VerificateEmailComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResetPasswordModule { }
