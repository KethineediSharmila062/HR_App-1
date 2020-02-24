import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: ban-types
  getRegister(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  // tslint:disable-next-line: ban-types
  create(register: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, register);
  }
  
  }
  
  

