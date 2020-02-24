import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private baseUrl = 'http://localhost:8080/api/signin';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getSignin(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  createSignin(signin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, signin);
  }

}
