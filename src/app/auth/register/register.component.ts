import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/shared/model/register.model';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public name: string = '';
  public email: string = '';
  public senha: string = '';
  public rSenha: string = '';

  public _errors: string[] = [];
  public _confirming: boolean = false;

  get hasErrors(): boolean {
    return this._errors.length > 0;
  }
  constructor(private request: RequestService, private route: Router) { this._errors = [] }

  validatePassword() {
    this._errors = [];

    if (this.senha) {
      if (this.rSenha.length > 0) {
        if (this.senha !== this.rSenha) {
          this._errors.push('As senhas devem ser iguais.')
        }
      }

      if (this.senha.length < 6) {
        this._errors.push('Senha deve ter mais que 6 caracteres!')
      }
    }
  }

  sendRegister() {
    const obj = {
      nome: this.name,
      email: this.email,
      senha: this.senha
    }

    if (!this.hasErrors) {
      this.request.register(obj)
        .subscribe(x => {
          this._confirming = true;
          setTimeout(() => {
            this.goToLogin();
          }, 3000);

          this._confirming = false;
        })
    }
  }

  goToLogin() {
    this.route.navigate(['auth/login']);
  }
}
