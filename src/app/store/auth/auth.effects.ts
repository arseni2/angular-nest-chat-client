import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../service/auth/auth.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthLoginLoadAction, AuthRegisterLoadAction, TypesActionsEnum } from './auth.actions';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  loginEffects$ = createEffect(() => this.actions$.pipe(
    ofType(TypesActionsEnum.loginLoad),
    mergeMap((action: Omit<ReturnType<typeof AuthLoginLoadAction>, 'type'>) => this.authService.login(action.name, action.password)
      .pipe(
        map(user => {
          this.authService.setToken(user.token)
          this.router.navigate(['/messenger'])
          return { type: TypesActionsEnum.login, user }
        }),
        catchError((err) => {
          return of(err).pipe(
            map(err => ({type: TypesActionsEnum.loginError, err: err.error}))
          )
        })
      )
    )
  ));

  registerEffects$ = createEffect(() => this.actions$.pipe(
    ofType(TypesActionsEnum.registerLoad),
    mergeMap((action: Omit<ReturnType<typeof AuthRegisterLoadAction>, 'type'>) => this.authService.register(action.name, action.password)
      .pipe(
        map(user => {
          this.authService.setToken(user.token)
          this.router.navigate(['/messenger'])
          return { type: TypesActionsEnum.register, user }
        }),
        catchError((err) => {
          return of(err).pipe(
            map(err => ({type: TypesActionsEnum.registerError, err: err.error}))
          )
        })
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
