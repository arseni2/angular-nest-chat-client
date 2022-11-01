import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UnAuthorizedErrorType } from '../../store/auth/types';
import { selectErrorAuthSelector } from '../../store/auth/auth.selectors';
import { AuthRegisterLoadAction } from '../../store/auth/auth.actions';
import { StoreTypes } from '../../store/store.types';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  name: string;
  password: string;

  constructor(private store$: Store<StoreTypes>) { }

  err$ = this.store$.select<UnAuthorizedErrorType>(selectErrorAuthSelector)

  ChangePassword(e: any) {
    this.password = e.target.value
  }

  ChangeName(e: any) {
    this.name = e.target.value
  }

  AuthRegister() {
    this.store$.dispatch(AuthRegisterLoadAction({name: this.name, password: this.password}))
  }

}
