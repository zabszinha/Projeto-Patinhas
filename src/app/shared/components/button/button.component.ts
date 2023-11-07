import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SimpleButtonComponent {
  @Input() label: string = '';
  @Input() width: string = '80%';
  @Input() color: string = '#24237b';
  @Input() disabled: boolean = false;

  @Output() public onClickChangeEmitter: EventEmitter<any> = new EventEmitter<any>();


  public onClick(e: any) {
    this.onClickChangeEmitter.emit(e);
  }
}
