import { Component } from '@angular/core';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';
import {FooterComponent} from '../../Templates/footer/footer.component';

@Component({
  selector: 'app-login-page',
  imports: [
    ButtomComponent,
    FooterComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
