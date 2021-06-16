import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operator } from '../model/operator';

@Injectable({
  providedIn: 'root',
})
export class OperatorService {
  private operatorUrl: string;
  constructor(private http: HttpClient) {
    this.operatorUrl = 'http://localhost:8081/operateur';
  }
  public findAll(): Observable<Operator[]> {
    return this.http.get<Operator[]>(this.operatorUrl + 's');
  }

  public save(operator: Operator) {
    return this.http.post<Operator>(this.operatorUrl + 's', operator);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.operatorUrl}/${id}`);
  }
}
