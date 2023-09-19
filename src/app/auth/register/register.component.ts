import { Component } from '@angular/core';
import { Register } from 'src/app/shared/model/register.model';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public register!: Register;
  public rSenha: string = '';

  public _errors: string[] = [];

  get hasErrors(): boolean {
    return this._errors.length > 0;
  }
  constructor(private request: RequestService) { this._errors = [] }

  validatePassword() {
    this._errors = [];

    if (this.register.senha) {
      if (this.rSenha.length > 0) {
        if (this.register.senha !== this.rSenha) {
          this._errors.push('As senhas devem ser iguais.')
        }
      }

      if (this.register.senha.length < 6) {
        this._errors.push('Senha deve ter mais que 6 caracteres!')
      }
    }
  }

  sendRegister() {
    if (!this.hasErrors) {
      this.request.register(this.register)
      .subscribe(x => console.log(x))
    }
  }
}
