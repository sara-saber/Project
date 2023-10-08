import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificateEmailComponent } from './compoenet/verificate-email/verificate-email.component';
import { NewPasswordComponent } from './compoenet/new-password/new-password.component';
import { GetEmailComponent } from './compoenet/get-email/get-email.component';
import { ResetPasswordComponent } from './reset-password.component';
import { UserResolveService } from '../user/resolvers/user-resolve.service';
import { NewPasswordGuard } from '../auth/guards/new-password.guard';

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
    component: NewPasswordComponent,
    resolve: { user: UserResolveService },
    canActivate: [NewPasswordGuard]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
