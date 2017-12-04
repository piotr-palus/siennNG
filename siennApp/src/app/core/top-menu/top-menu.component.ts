import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit
} from '@angular/core';
import {AuthGuard} from "../../guards/auth.guard";
import {Router} from "@angular/router";
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/state';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuComponent implements OnInit {
  logged$: Observable<boolean>;
  token: string;
  userName$: Observable<string>;
  userEmail$: Observable<string>;

  constructor(private router: Router,
              private store: Store<fromRoot.State>,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.logged$ = this.store.select(fromRoot.getLoggedState);
  }

  logOut() {
    this.store.dispatch(new fromRoot.Logout);
    this.router.navigate(['/login']);
  }
}
