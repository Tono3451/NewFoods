import { Component } from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';

@Component({
  selector: 'app-register-page',
  imports: [
    FooterComponent,
    ButtomComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
