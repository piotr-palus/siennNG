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

  constructor(private router: Router,
              private store: Store<fromRoot.State>,
              private auth: AuthGuard) {
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.store.dispatch(new fromRoot.SetLoggedInState);
    }
    this.logged$ = this.store.select(fromRoot.getLoggedState);
  }

  logOut() {
    this.store.dispatch(new fromRoot.Logout);
    this.router.navigate(['/login']);
  }
}
