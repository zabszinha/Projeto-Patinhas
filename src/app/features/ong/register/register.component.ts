import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterONGComponent {

  public image: any

  public nomePet: string = '';
  public idade: string = '';
  public raca: string = '';
  public porte: string = '';

  public _errors: string[] = [];
  public _confirming: boolean = false;

  get hasErrors(): boolean {
    return this._errors.length > 0;
  }
  constructor(private request: RequestService, private route: Router) { this._errors = [] }

  sendRegister() {
    const obj = {
      nome: this.nomePet,
      idade: this.idade,
      raca: this.raca,
      porte: this.porte,
      foto: '',
      descricao: '',
      id_use: 1
    }

    if (!this.hasErrors) {

      // this.request.register(obj)
      //   .subscribe(x => {
      //     this._confirming = true;

      //     setTimeout(() => {

      //     }, 2000);
      //   })
    }
  }
}
