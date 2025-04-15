import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {LoginServiceService} from '../../services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ButtomComponent,
    FooterComponent,
    RouterLink
  ],
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(private loginServiceService: LoginServiceService, private router: Router) {}

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Por favor, rellene todos los campos correctamente.');
      return;
    }

    try {
      const user = await this.loginServiceService.login(this.email, this.password);
      console.log('Usuario autenticado:', user);
      this.router.navigate(['/mainPage']);
    } catch (error) {
      alert('Correo o contraseña incorrectos.');
      console.error('Error:', error);
    }
  }
}
