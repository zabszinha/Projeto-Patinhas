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

  login(log: Login): Observable<string> {
    return this.http.post<string>('http://localhost:3000/LoginUser', log);
  }
}
