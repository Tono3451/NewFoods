import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent {
  @Input() buttonText: string = 'Lorem';
  @Input() buttonAction: string = '';
  @ViewChild('buttonRef') buttonRef!: ElementRef<HTMLButtonElement>;
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    event.preventDefault();

    this.clicked.emit(event);

    if (this.buttonAction === 'submit') {
      const form = (event.target as HTMLElement).closest('form');
      if (form) {
        form.requestSubmit();
      }
    } else if (this.buttonAction === 'log') {
      console.log("Button clicked!");
    }
  }
}
