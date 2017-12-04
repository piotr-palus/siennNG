import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Router, RouterStateSnapshot
} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }

  getToken(): string {
    return sessionStorage.getItem('SiennToken');
  }
}
