import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../model/register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  register(reg: Register): Observable<string> {
    return this.http.post<string>('localhost:3000/AddUser', reg);
  }
}
