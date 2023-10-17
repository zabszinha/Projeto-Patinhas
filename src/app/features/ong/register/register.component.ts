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
  public idade: number = 1;
  public raca: string = '';
  public porte: string = '';

  public _errors: string[] = [];
  public _confirming: boolean = false;

  get hasErrors(): boolean {
    return this._errors.length > 0;
  }
  constructor(
    private request: RequestService,
    private route: Router) { this._errors = [] }

  validateRegister() {
    this._errors = [];

    if (this.nomePet == '' || this.nomePet.length < 3) {
      this._errors.push('Nome do Pet Inválido');
    }
    if (this.idade < 0) {
      this._errors.push('Idade do Pet Inválida');
    }

    if (this.raca == '') {
      this._errors.push('Raça do Pet Inválido');
    }

    if (this.porte.toLowerCase() != 'pequeno'
      || this.porte.toLowerCase() != 'medio'
      || this.porte.toLowerCase() != 'grande') {
      this._errors.push('Porte Inválido, tente "Pequeno, Médio ou Grande"');
    }
  }

  sendRegister() {
    if (!this.hasErrors) {
      const user = JSON.parse(localStorage.getItem('FKToken') as string);

      const obj = {
        nome: this.nomePet,
        idade: this.idade,
        raca: this.raca,
        porte: this.porte,
        foto: 'cachorro03',
        descricao: '',
        id_use: user.id
      }

      this.request.registerAnimal(obj)
        .subscribe(x => {
          this._confirming = true;

          setTimeout(() => {

          }, 2000);
        })
    }
  }
}
