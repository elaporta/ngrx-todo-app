import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FilterType, setFilter } from 'src/app/filters/filter.actions';
import { deleteCompletedTodos } from '../todo.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    activeFilter!: FilterType;
    filters: FilterType[] = ['all', 'completed', 'pending'];
    pendings: number = 0;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.store.subscribe(({ todos, filter }) => {
            this.activeFilter = filter;

            this.pendings = todos.filter(todo => !todo.completed).length;
        });
    }

    changeFilter(filter: FilterType) {
        this.store.dispatch(setFilter({ filter: filter }));
    }

    clearCompleted() {
        this.store.dispatch(deleteCompletedTodos());
    }
}
