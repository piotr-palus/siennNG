import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RestService} from '../../core/rest.service';
import {ActivatedRoute, Router} from "@angular/router";
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  errors;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder,
              private rest: RestService,
              private router: Router,
              private cd: ChangeDetectorRef,
              private route: ActivatedRoute,
              private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.rest.post('/Jwt', this.loginForm.value).subscribe(response => {
      sessionStorage.setItem('Token', JSON.parse(response._body).token);
      this.store.dispatch(new fromRoot.Login);
    }, error => {
      this.errors = JSON.parse(error._body).message;
      this.cd.detectChanges();
    });

  }
}
