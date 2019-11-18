import { Injectable, Inject } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFocus } from '@model';

@Injectable({
  providedIn: 'root'
})
export class FocusService {
  private http: HttpClient;
  private baseUrl = environment.baseUrl;

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
  }

  focus_GetAll(): Observable<IFocus[]> {
    return this.http.get<IFocus[]>(this.baseUrl + 'api/Focus');
  }

  focus_Delete(id: number) {
    return this.http.delete(this.baseUrl + 'api/Focus/' + id);
  }

}
