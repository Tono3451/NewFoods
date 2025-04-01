import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainPageComponent} from './Pages/main-page/main-page.component';
import {ButtomComponent} from './Templates/buttom/buttom.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPageComponent, ButtomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewFoods';
}
