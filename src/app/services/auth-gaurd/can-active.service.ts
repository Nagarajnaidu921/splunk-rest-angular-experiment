import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../auth/user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class CanActiveService {

  constructor(
    private userServ: UserAuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.userServ.isLoggedIn())
    if (this.userServ.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], {
      queryParams: {
        next: state.url
      }
    });

    return false;

  }
}
