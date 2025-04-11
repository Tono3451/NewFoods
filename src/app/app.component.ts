import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginPageComponent} from './Pages/login-page/login-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewFoods';
}
