import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Router, RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getToken() {
    return sessionStorage.getItem('Token') || localStorage.getItem( 'Token');
  }
}
