import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../model/register.model';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  register(reg: Register): Observable<string> {
    return this.http.post<string>('http://localhost:3000/AddUser', reg);
  }

  login(log: Login): Observable<any> {
    return this.http.post<any>('http://localhost:3000/LoginUser', log);
  }

  listAllBixinhos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/ListAllBixinhos');
  }

  addBixinho(log: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/AddBixinho', log);
  }
}
