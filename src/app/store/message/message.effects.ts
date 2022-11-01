import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageCreatedAction, MessageGetAllAction, TypesActionsEnum } from './message.actions';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { MessageService } from '../../service/message/message.service';


@Injectable()
export class MessageEffects {
  getAllMessages$ = createEffect(() => this.actions$.pipe(
    ofType(TypesActionsEnum.getAllMessage),
    mergeMap((action: Omit<ReturnType<typeof MessageGetAllAction>, 'type'>) => this.messageService.getAllMessage()
      .pipe(
        map(messages => {
          return { type: TypesActionsEnum.setAllMessage, messages }
        }),
        catchError((err) => {
          return of(err).pipe(
            map(err => ({type: TypesActionsEnum.errorMessage, err: err.error}))
          )
        })
      )
    )
  ));

  recMessage$ = createEffect(() => this.actions$.pipe(
    ofType(TypesActionsEnum.createdMessage),
    exhaustMap((action: Omit<ReturnType<typeof MessageCreatedAction>, 'type'>) => this.messageService.recMessage()
      .pipe(
        map(message => {
          console.log(message)
          return { type: TypesActionsEnum.createSetMessage, message}
        }),
        catchError((err) => {
          return of(err).pipe(
            map(err => ({type: TypesActionsEnum.errorMessage, err: err.error}))
          )
        })
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
}
