import { createSelector } from '@ngrx/store';
import { AuthStateI } from './auth.reducer';
import { StoreTypes } from '../store.types';


const selectAuth = (state: StoreTypes) => state.authReducer
export const selectErrorAuthSelector = createSelector(
  selectAuth,
  (state: AuthStateI) => state.err
)
