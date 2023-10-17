import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public favoriteAnimal: boolean = false;

  public listaAnimais: any[] = [
    {
            "id_animal": 1,
            "nome": "Cimba",
            "idade": 9,
            "especie": "Cachorro",
            "raca": "York",
            "porte": "Minusculo",
            "foto": "cachorro01",
            "descricao": "Cachorro do Alan ou Alex, eu n sei quem é quem",
            "id_usu": 1
        },
        {
            "id_animal": 2,
            "nome": "Zaira",
            "idade": 6,
            "especie": "Cachorro",
            "raca": "Shitzu",
            "porte": "Minusculo",
            "foto": "cachorro02",
            "descricao": "----",
            "id_usu": 2
        }
    ]

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    // this.listaAnimais = [];
    // this.requestService.listAllBixinhos().subscribe(x => {
    //   this.listaAnimais.push(x);
    // })
  }
}
