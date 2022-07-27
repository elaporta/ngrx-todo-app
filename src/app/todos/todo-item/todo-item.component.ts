import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../todo.model';
import { deleteTodo, editTodo, toggleTodo } from '../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo!: Todo;
    @ViewChild('inputEdit') inputEdit!: ElementRef;

    completed!: FormControl;
    text!: FormControl;

    editMode: boolean = false;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.completed = new FormControl(this.todo.completed);
        this.text = new FormControl(this.todo.text, Validators.required);

        this.completed.valueChanges.subscribe((value: boolean) => {
            this.store.dispatch(toggleTodo({ id: this.todo.id }));
        });
    }

    edit(value: boolean) {
        this.editMode = value;

        setTimeout(() => {
            this.inputEdit.nativeElement.select();
        }, 1);
    }

    save() {
        this.editMode = false;

        if(this.text.invalid || this.text.value === this.todo.text) {
            this.text.setValue(this.todo.text);
            return;
        }

        this.store.dispatch(editTodo({ id: this.todo.id, text: this.text.value }));
    }

    delete() {
        this.store.dispatch(deleteTodo({ id: this.todo.id }));
    }
}
