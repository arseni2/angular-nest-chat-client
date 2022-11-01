import { createSelector } from '@ngrx/store';
import { StoreTypes } from '../store.types';


const selectMessage = (state: StoreTypes) => state.messageReducer
export const getAllMessageSelector = createSelector(selectMessage, (state) => state.messages)
