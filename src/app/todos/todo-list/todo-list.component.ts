import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterType } from 'src/app/filters/filter.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../todo.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos: Todo[] = [];
    activeFilter!: FilterType;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.store.subscribe(({ todos, filter }) => {
            this.todos = todos;
            this.activeFilter = filter;
        });
    }

}
