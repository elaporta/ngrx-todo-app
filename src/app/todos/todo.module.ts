import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoFilterPipe } from './todo.filter.pipe';

@NgModule({
    declarations: [
        TodoCreateComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoListComponent,
        TodoPageComponent,
        TodoFilterPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        TodoPageComponent
    ]
})
export class TodoModule { }