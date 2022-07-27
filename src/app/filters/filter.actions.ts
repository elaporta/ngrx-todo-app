import { createAction, props } from '@ngrx/store';

export type FilterType = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[Filter] Set', props<{ filter: FilterType }>());