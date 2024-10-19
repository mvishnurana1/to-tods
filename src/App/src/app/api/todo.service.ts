import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoObservable = new BehaviorSubject("nothing");
  public todo$ = this.todoObservable.asObservable();

  constructor() { }

}
