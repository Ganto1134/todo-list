import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iTodowithuser } from '../../Models/todowithuser';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  todosWithUsers: iTodowithuser[] = [];
  filter: iTodowithuser[] = [];
  filterText: string = '';

  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.todosWithUsers = this.todoSvc.getTodosWithUsers();
    this.filter = this.todosWithUsers;
  }


  toggleCompletion(card: iTodowithuser): void {
    card.completed = !card.completed;
    this.todoSvc.updateTodoStatus(card.id, card.completed);
  }

  filterTodos(): void {
    const lowerCaseFilter = this.filterText.toLowerCase();
    this.filter = this.todosWithUsers.filter(todo =>
      `${todo.user.firstName} ${todo.user.lastName}`.toLowerCase().includes(lowerCaseFilter)
    );
  }
}
