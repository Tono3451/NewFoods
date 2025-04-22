import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LoginServiceService} from '../../services/login-service.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private loginServiceService: LoginServiceService, private router: Router) {}

  redirect($event: MouseEvent) {
    this.router.navigate(['/searchPage']);
  }

  async cerrarSesion() {
    try {
      this.loginServiceService.logout();
    } catch (error) {
      alert('Correo o contraseña incorrectos.');
      console.error('Error:', error);
    }
  }
}
