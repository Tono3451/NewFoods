import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-input2',
  imports: [],
  templateUrl: './text-input2.component.html',
  styleUrl: './text-input2.component.css'
})
export class TextInput2Component {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
}
