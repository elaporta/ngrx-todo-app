import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../filters/filter.actions';
import { Todo } from './todo.model';

@Pipe({
    name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

    transform(todos: Todo[], filter: FilterType): Todo[] {
        switch(filter) {
            case 'completed':
                return todos.filter((todo) => todo.completed);
            case 'pending':
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    }
}
