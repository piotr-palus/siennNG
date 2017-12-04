import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap';

import * as fromRoot from '../store/state';
import {AuthService} from '../core/auth.service';
import {ProductsService} from '../core/products.service';
import {Router} from '@angular/router';
import {of} from 'rxjs/observable/of';

@Injectable()
export class Effects {

  @Effect()
  login: Observable<Action> = this.actions$
    .ofType(fromRoot.LOGIN)
    .switchMap((action: fromRoot.Login) => this.authSv.login(action.payload)
      .map(response => {
        this.router.navigate(['/products']);
        return new fromRoot.LoginSuccess(response);
      })
      .catch(error => of(new fromRoot.LoginFailure(error)))
    );

  @Effect()
  fetchProducts: Observable<Action> = this.actions$
    .ofType(fromRoot.FETCH_PRODUCTS)
    .switchMap((action: fromRoot.FetchProducts) => this.productsSv.getProducts()
      .map(response => new fromRoot.FetchProductsSuccess(response))
      .catch(error => of(new fromRoot.FetchProductsFailure(error)))
    );


  constructor(private actions$: Actions,
              private store: Store<fromRoot.State>,
              private authSv: AuthService,
              private productsSv: ProductsService,
              private router: Router) {
  }
}
