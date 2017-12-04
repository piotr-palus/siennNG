import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as fromRoot from '../store/state';
import {AuthService} from '../core/auth.service';
import {ProductsService} from '../core/products.service';

@Injectable()
export class Effects {

  @Effect()
  login: Observable<Action> = this.actions$
    .ofType(fromRoot.LOGIN)
    .switchMap((action: fromRoot.Login) => this.authSv.login(action.payload)
      .map(response => new fromRoot.LoginSuccess(response))
    );

  @Effect()
  fetchProducts: Observable<Action> = this.actions$
    .ofType(fromRoot.FETCH_PRODUCTS)
    .switchMap((action: fromRoot.FetchProducts) => this.productsSv.getProducts()
      .map(response => new fromRoot.FetchProductsSuccess(response))
    );


  constructor(private actions$: Actions,
              private store: Store<fromRoot.State>,
              private authSv: AuthService,
              private productsSv: ProductsService) {
  }
}
