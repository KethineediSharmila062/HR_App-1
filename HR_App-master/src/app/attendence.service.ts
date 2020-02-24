import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninoutService {

  private baseUrl = 'http://localhost:8080/api/attendence';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types

  // tslint:disable-next-line: ban-types
  updateSigninout(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, value);
  }

}
