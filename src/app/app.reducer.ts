import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filters/filter.reducer';
import { FilterType } from './filters/filter.actions';
import { Todo } from "./todos/todo.model";

export interface AppState {
	todos: Todo[],
	filter: FilterType
}

export const appReducers: ActionReducerMap<AppState> = {
	todos: todoReducer,
	filter: filterReducer
}