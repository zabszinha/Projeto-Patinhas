import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ValidateService } from 'src/app/shared/services/validate.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit{
  public isAuthRoute: boolean = false;
  public isOngRoute: boolean = false;
  public isDefault: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private validateService: ValidateService) { }

    ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        const url = event.url;
        if (url.startsWith('/h')) {
          this.isAuthRoute = false;
          this.isOngRoute = false;
          this.isDefault = false;
        } else {
          if (url.startsWith('/o')) {
            this.isOngRoute = true;
          }
          if (url.startsWith('/u')) {
            this.isDefault = true;
          }
          this.isAuthRoute = true;
        }
      });
  }

  queroAUdotar() {
    if (!this.validateService.validate()) {
      this.router.navigate(['auth/register']);
    } else {
      const token = JSON.parse(localStorage.getItem('FKToken') as string);

      const typeUser = token.tp_usu;
      if (typeUser) {
        this.router.navigate(['auth/login']);
        return;
      }

      this.router.navigate(['user'])
    }
  }
}
