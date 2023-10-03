import { ResourceModel } from 'src/app/modules/shared/models/generic-model';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { LoginRegisterGuard } from './modules/auth/guards/login-register.guard';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginRegisterGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginRegisterGuard]
  },
  {
    path: 'restPassword',
    component:ResetPasswordComponent,
    loadChildren: () => import('./modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'admin/dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
