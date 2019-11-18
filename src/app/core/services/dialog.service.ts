import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dataSource$ = new BehaviorSubject<object | boolean>(null);

  constructor() { }

  setDataSource(data: object | boolean): void {
    this.dataSource$.next(data);
  }

  getDataSource(): Observable<object | boolean> {
    return this.dataSource$.asObservable();
  }
}
