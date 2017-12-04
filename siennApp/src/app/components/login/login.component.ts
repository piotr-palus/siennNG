import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/state';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError$: Observable<string>;

  get username() {
    return this.loginForm.get('UserName');
  }

  get password() {
    return this.loginForm.get('Password');
  }

  constructor(private fb: FormBuilder,
              private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });

    this.loginError$ = this.store.select(fromRoot.getLoginErrors);
  }

  loginSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.store.dispatch(new fromRoot.Login(this.loginForm.value));
  }
}
