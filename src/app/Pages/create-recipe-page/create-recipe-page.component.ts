import { Component } from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {GetImageComponent} from '../../Templates/get-image/get-image.component';
import {TextInput2Component} from '../../Templates/text-input2/text-input2.component';
import {DropdownInputComponent} from '../../Templates/dropdown-input/dropdown-input.component';
import {NumberInputComponent} from '../../Templates/number-input/number-input.component';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';
import {FooterComponent} from '../../Templates/footer/footer.component';

@Component({
  selector: 'app-create-recipe-page',
  imports: [
    HeaderComponent,
    GetImageComponent,
    TextInput2Component,
    DropdownInputComponent,
    NumberInputComponent,
    ButtomComponent,
    FooterComponent
  ],
  templateUrl: './create-recipe-page.component.html',
  styleUrl: './create-recipe-page.component.css'
})
export class CreateRecipePageComponent {

}
