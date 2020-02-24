import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignoutService {

  private baseUrl = 'http://localhost:8080/api/signout';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getSignout(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  createSignout(signout: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, signout);
  }

}
