import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserDetailsService } from '../services/user-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthReverseGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public userDetailsService: UserDetailsService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn) {
      if (this.userDetailsService.haveUserDetails) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['registration']);
      }
    }
    return true;
  }
}
