import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthRoute: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        const url = event.url;
        if (url.startsWith('/a')) {
          this.isAuthRoute = true;
        } else {
          this.isAuthRoute = false;
        }
      });
  }
}
