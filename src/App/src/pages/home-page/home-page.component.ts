import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TodoService } from '../../app/api/todo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatCardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private todoService = inject(TodoService);

  todos$ = this.todoService.todo$;
  weather$ = this.todoService.weather$;

  ngOnInit(): void {
    this.todoService.getWeather();
  }
}
