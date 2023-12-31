import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputTextComponent {
  @Input() model: string = '';

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() isPassword: boolean = false;
  @Input() error: boolean = false;

  @Output() modelChangeEmitter: EventEmitter<any> = new EventEmitter();

  public modelChange(e: any): void {
    this.model = e;
    this.modelChangeEmitter.emit(this.model);
  }

}
