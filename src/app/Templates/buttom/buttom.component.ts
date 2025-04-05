import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent {
  @Input() buttonText: string = 'Lorem';
  @Input() buttonAction: string = '';

  handleClick(event: Event) {
    event.preventDefault();

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
