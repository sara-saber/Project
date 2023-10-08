import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivate {
  constructor(
    private lS:LocalStorageService,
    private router:Router
    ){}
  canActivate(): boolean {
    return  this.lS.get('user')?(this.router.navigate(['/admin/dashboard']),false):(true)
  }
  
}
