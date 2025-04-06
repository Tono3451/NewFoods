import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  imports: [],
  templateUrl: './dropdown-input.component.html',
  standalone: true,
  styleUrl: './dropdown-input.component.css'
})
export class DropdownInputComponent {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
}
