import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseUrl = 'http://localhost:8080/api/leave';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getLeave(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  createLeave(leave: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, leave);
  }

  // tslint:disable-next-line: ban-types
  updateLeave(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLeave(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLeavesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLeavesById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
}
