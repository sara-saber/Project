import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificateEmailComponent } from './compoenet/verificate-email/verificate-email.component';
import { NewPasswordComponent } from './compoenet/new-password/new-password.component';
import { GetEmailComponent } from './compoenet/get-email/get-email.component';

const routes: Routes = [

  {
    path: 'verficateEmail',
    component: VerificateEmailComponent

  },
  {
    path: 'getEmail',
    component: GetEmailComponent

  },
  {
    path: 'change',
    component: NewPasswordComponent

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
