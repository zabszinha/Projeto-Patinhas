import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public login: string = '';
  public senha: string = '';

  public _errors: string[] = [];
  public _confirming: boolean = false;
  public _error: boolean = false;

  get hasErrors(): boolean {
    return this._errors.length > 0;
  }
  constructor(private request: RequestService, private route: Router) { this._errors = [] }

  validatePassword() {
    this._errors = [];

    if (!this.login) { this._errors.push('Campo Login deve ser preenchido!') }
    if (!this.senha) { this._errors.push('Campo Senha deve ser preenchido!') }
  }

  sendLogin() {
    const obj = {
      login: this.login,
      senha: this.senha
    }

    if (!this.hasErrors) {
      this.request.login(obj)
        .subscribe(x => {
          if (x == "Email e/ou senha incorretos.") {
            this._confirming = false;
            this._error = true
            setTimeout(() => {
              this._error = false
            }, 2000);
          } else {
            this._error = false
            this._confirming = true;
            localStorage.setItem('FKToke', 'true');


            setTimeout(() => {
              this.goToHome();
            }, 2000);
          }
        })
    }
  }


  goToRegister() {
    this.route.navigate(['auth/register']);
  }

  goToHome() {
    this.route.navigate(['/home']);
  }
}
