import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { createTodo } from '../todo.actions';

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

    textInput: FormControl = new FormControl(null, Validators.required);

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
    }

    create() {
        if(this.textInput.invalid) {
            return;
        }

        this.store.dispatch(createTodo({ text: this.textInput.value }));
        this.textInput.reset();
    }
}
