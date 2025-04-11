import { Component } from '@angular/core';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {HeaderComponent} from '../../Templates/header/header.component';

@Component({
  selector: 'app-recipe-page',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {

}
