import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public favoriteAnimal: boolean = false;
  public showForm: boolean = false;
  public id: number | null = null;

  public listaAnimais: any[] = [
    {
      "id_animal": 0,
      "nome": "Cimba",
      "idade": 9,
      "especie": "Cachorro",
      "raca": "York",
      "porte": "Minusculo",
      "foto": "cachorro01",
      "descricao": "Cachorro do Alan ou Alex, eu n sei quem é quem",
      "id_usu": 1,
      "selected": false
    },
    {
      "id_animal": 1,
      "nome": "Zaira",
      "idade": 6,
      "especie": "Cachorro",
      "raca": "Shitzu",
      "porte": "Minusculo",
      "foto": "cachorro02",
      "descricao": "----",
      "id_usu": 2,
      "selected": false
    }
  ]

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    // this.listaAnimais = [];
    // this.requestService.listAll().subscribe(x => {
    //   x.forEach(y => this.listaAnimais.push(y))
    // })
  }

  goToAdoptionForm(id: number) {
    this.showForm = true;
    this.id = id as number;
  }

  showFormUpdate(value: boolean) {
    this.showForm = value
  }

  update() {
    this.showForm = false
    this.listaAnimais[this.id as number].selected = true
  }
}
