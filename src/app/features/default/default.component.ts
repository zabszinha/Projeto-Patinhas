import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public listaAnimais: any[] = []

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.listaAnimais = [];
    this.requestService.listAllBixinhos().subscribe(x => {
      this.listaAnimais.push(x);
    })
  }
}
