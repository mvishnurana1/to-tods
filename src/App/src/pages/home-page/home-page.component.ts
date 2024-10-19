import { Component, inject } from '@angular/core';
import { TodoService } from '../../app/api/todo.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private todoService = inject(TodoService);

  todos$ = this.todoService.todo$;
}
