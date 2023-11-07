import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.scss']
})
export class AdoptionFormComponent implements OnDestroy {
  @Output() backChangeEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() sendChangeEmitter: EventEmitter<number> = new EventEmitter();

  ondeMora = {
    selected1: false,
    selected2: false,
    selected3: false,
  };

  possuiAnimais = {
    selected1: false,
    selected2: false,
  };

  rotina = {
    selected1: false,
    selected2: false,
    selected3: false,
  };

  pessoaPaciente = {
    selected1: false,
    selected2: false,
    selected3: false,
  };

  motivoAdocao = {
    selected1: false,
    selected2: false,
    selected3: false,
  };

  ngOnDestroy(): void {
    this.ondeMora = {
      selected1: false,
      selected2: false,
      selected3: false,
    };

    this.possuiAnimais = {
      selected1: false,
      selected2: false,
    };

    this.rotina = {
      selected1: false,
      selected2: false,
      selected3: false,
    };

    this.pessoaPaciente = {
      selected1: false,
      selected2: false,
      selected3: false,
    };

    this.motivoAdocao = {
      selected1: false,
      selected2: false,
      selected3: false,
    };
  }

  get validateSend(): boolean {
    return (this.ondeMora.selected1 || this.ondeMora.selected2 || this.ondeMora.selected3)
      && (this.possuiAnimais.selected1 || this.possuiAnimais.selected2)
      && (this.rotina.selected1 || this.rotina.selected2 || this.rotina.selected3)
      && (this.pessoaPaciente.selected1 || this.pessoaPaciente.selected2 || this.pessoaPaciente.selected3)
      && (this.motivoAdocao.selected1 || this.motivoAdocao.selected2 || this.motivoAdocao.selected3)
  }

  back() {
    this.backChangeEmitter.emit(false)
  }

  send() {
    this.sendChangeEmitter.emit(1)
  }
}
