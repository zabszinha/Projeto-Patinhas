import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ValidateService } from 'src/app/shared/services/validate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private validateService: ValidateService, private router: Router, private actvRout: ActivatedRoute) { }

  ngOnInit() {
  }

  queroAUdotar() {
    if (this.validateService.validate()) {
      console.log('Go To Adopted')
    } else {
      this.router.navigate(['auth/login']);
    }
  }

  cadastrarAnimal() {
    if (!this.validateService.validate()) {
      this.router.navigate(['auth/register']);
    } else {
      const token = JSON.parse(localStorage.getItem('FKToken') as string);

      const typeUser = token.typeUser;
      if (!typeUser) {
        this.router.navigate(['auth/login']);
        return;
      }

      this.router.navigate(['ong/register'])
    }
  }
}
