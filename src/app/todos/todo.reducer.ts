import { createReducer, on } from '@ngrx/store';
import { createTodo, editTodo, toggleTodo, deleteTodo, toggleAllTodos, deleteCompletedTodos } from './todo.actions';
import { Todo } from './todo.model';

export const initialState: Todo[] = [
    new Todo('Task 1'),
    new Todo('Task 2'),
    new Todo('Task 3')
];

export const todoReducer = createReducer(
    initialState,

    on(createTodo, (state, { text }) => [...state, new Todo(text)]),

    on(toggleTodo, (state, { id }) => {
        return state.map((todo) => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
    }),

    on(editTodo, (state, { id, text }) => {
        return state.map((todo) => {
            if(todo.id === id) {
                return { ...todo, text: text };
            }
            return todo;
        });
    }),

    on(toggleAllTodos, (state, { completed }) => {
        return state.map((todo) => {
            return { ...todo, completed: completed };
        });
    }),

    on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),

    on(deleteCompletedTodos, (state) => state.filter((todo) => !todo.completed)),
);