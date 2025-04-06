import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-input',
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
}
