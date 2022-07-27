import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, FilterType } from './filter.actions';

export const initialState: FilterType = 'all';

export const filterReducer = createReducer<FilterType, Action>(
    initialState,
    on(setFilter, (state, { filter }) => filter )
);