import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validate(): boolean {
    const token = localStorage.getItem('FKToken');
    return token != null;
  }
}
