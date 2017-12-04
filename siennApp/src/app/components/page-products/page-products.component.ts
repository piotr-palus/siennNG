import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/state';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageProductsComponent implements OnInit {
  products$: Observable<Object[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromRoot.FetchProducts);
    this.products$ = this.store.select(fromRoot.getProducts);
  }

}
