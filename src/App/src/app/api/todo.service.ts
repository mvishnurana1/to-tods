import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { weather } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  httpClient = inject(HttpClient);

  private todoObservable = new BehaviorSubject<string>("nothing");
  public todo$ = this.todoObservable.asObservable();

  private weatherSubject = new BehaviorSubject<weather[] | undefined>(undefined);
  public weather$ = this.weatherSubject.asObservable();

  public getWeather() {
    this.httpClient.get<weather[]>('https://localhost:7016/WeatherForecast').pipe(
      tap((res) => {
        this.weatherSubject.next(res);
      }),
      catchError((error) => of(this.handleError(error)))
    ).subscribe();
  }

  public handleError(error: unknown) {
    console.log(error);
  }
}
