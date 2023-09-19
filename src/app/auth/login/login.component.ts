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

  get hasErrors(): boolean {
    return this._errors.length > 0;
  }
  constructor(private request: RequestService, private route: Router) { this._errors = [] }

  validatePassword() {
    this._errors = [];

    if (!this.login) { this._errors.push('Campo Login deve ser preenchido!')}
    if (!this.senha) { this._errors.push('Campo Senha deve ser preenchido!')}
  }

  sendRegister() {
    const obj = {
      login: this.login,
      senha: this.senha
    }

    if (!this.hasErrors) {
      this.request.login(obj)
        .subscribe(x => {
          this.goToHome();
        })
    }
  }


  goToRegister() {
    this.route.navigate(['auth/register']);
  }

  goToHome() {
    this.route.navigate(['/']);
  }
}
