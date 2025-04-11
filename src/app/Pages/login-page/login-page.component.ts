import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
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

  async onSubmit(form: any) {
    this.email = form.value.email;
    this.password = form.value.password;
    this.loginServiceService.login(this.email, this.password)
      .then(user => console.log('Usuario autenticado:', user))
      .then(() => {this.router.navigate(['/mainPage']);})
      .catch(error => console.error('Error:', error));
  }
}
