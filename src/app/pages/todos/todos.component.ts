import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iTodowithuser } from '../../Models/todowithuser';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todosWithUsers: iTodowithuser[] = [];

  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.todosWithUsers = this.todoSvc.getTodosWithUsers();
  }


  toggleCompletion(card: iTodowithuser): void {
    card.completed = !card.completed;
    this.todoSvc.updateTodoStatus(card.id, card.completed);
  }

}
