import { Component,  OnInit } from '@angular/core';
import { sidenavMenuItems, SideNavItem } from './side-nav-menuitems';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserAuthService } from './services/auth/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'splunk-rest-ngClient';
  sideNavMenuItems: SideNavItem[];
  isLoggedIn: boolean;
  constructor(
    private router: Router,
    private userAuth: UserAuthService
  ) {
    this.sideNavMenuItems = sidenavMenuItems;
  }

  ngOnInit() {
    
    this.checkIsUserIsLoggedIn();
    this.listenRouterEvents();
  }


  checkIsUserIsLoggedIn() {
    if (!this.userAuth.isLoggedIn()) {
      this.isLoggedIn = false;
      return;
    }
    this.isLoggedIn = true;
  
  }

  listenRouterEvents() {
    this.router.events
      .pipe(filter((event: ActivationEnd) => event instanceof ActivationEnd))
      .subscribe((event) => {
        this.checkIsUserIsLoggedIn();
      });
  }

  logout() {
    console.log('logout')
    this.userAuth.logout();
    this.isLoggedIn = false;
  }
}
