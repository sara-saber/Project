import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { User } from 'src/app/modules/user/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User = new User
  ngOnInit(): void {
    this.user = this.lS.get('user')

  }
  constructor(
    private lS: LocalStorageService,
    private router: Router
  ) { }
  logout() {
    this.lS.remove('user')
    this.router.navigate(['/login'])
  }
  sidebarToggle(){
    
  }

}
