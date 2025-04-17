import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private auth: Auth, private router: Router) {}

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Usuario autenticado:', userCredential.user);

      this.router.navigate(['/mainPage']);
    } catch (error) {
      console.error('Error al iniciar sesión:');
      throw error;
    }
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
