import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthLoginLoadAction } from '../../store/auth/auth.actions';
import { UnAuthorizedErrorType } from '../../store/auth/types';
import { selectErrorAuthSelector } from '../../store/auth/auth.selectors';
import { StoreTypes } from '../../store/store.types';


@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css'],
})
export class SigninPageComponent {
  name: string;
  password: string;

  constructor(private store$: Store<StoreTypes>) {}

  err$ = this.store$.select<UnAuthorizedErrorType>(selectErrorAuthSelector);

  ChangePassword(e: any) {
    this.password = e.target.value;
  }

  ChangeName(e: any) {
    this.name = e.target.value;
  }

  AuthLogin() {
    this.store$.dispatch(AuthLoginLoadAction({ name: this.name, password: this.password }));
  }

}
