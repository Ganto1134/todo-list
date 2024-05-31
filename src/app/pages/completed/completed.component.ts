import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iTodowithuser } from '../../Models/todowithuser';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent implements OnInit {

  completed: iTodowithuser[] = [];

  constructor( private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.completed = this.todoSvc.getCompletedTodos();
  }

}
