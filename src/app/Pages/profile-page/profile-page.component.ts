import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Templates/header/header.component';
import { FooterComponent } from '../../Templates/footer/footer.component';
import { AvatarComponent } from '../../Templates/avatar/avatar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoginServiceService } from '../../services/login-service.service';
import {onAuthStateChanged} from '@angular/fire/auth';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  nombre: string = 'Usuario';

  constructor(
    private userService: UserService,
    private loginServiceService: LoginServiceService
  ) {}

  ngOnInit() {
    onAuthStateChanged(this.loginServiceService['auth'], async (user) => {
      if (user) {
        try {
          const userData = await this.userService.getUserDataFromFirestore(user.uid);
          console.log('Datos del usuario desde Firestore:', userData);

          this.nombre = userData.nombre;

        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      } else {
        console.log('No hay usuario autenticado.');
      }
    });
  }
}
