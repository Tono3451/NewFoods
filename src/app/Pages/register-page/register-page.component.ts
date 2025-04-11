import { Component } from '@angular/core';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';
import {RegisterUserService} from '../../services/register-user.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [
    FooterComponent,
    ButtomComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  standalone: true,
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(
    private authService: RegisterUserService,
    private fb: FormBuilder
  ) {

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]],
      confirmar: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const { nombre, correo, contraseña } = this.registerForm.value;

      if (this.registerForm.value.contraseña === this.registerForm.value.confirmar) {
        this.authService.registerUser(nombre, correo, contraseña);
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else {
      alert('Por favor, rellene todos los campos correctamente');
    }
  }
}
