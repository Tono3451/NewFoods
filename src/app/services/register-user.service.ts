import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class RegisterUserService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async registerUser(nombre: string, correo: string, contraseña: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, correo, contraseña);
      const uid = userCredential.user.uid;

      const userData = {
        id: uid,
        nombre: nombre,
        correo: correo,
        createdRecipes: [],
        savedRecipes: []
      };

      await setDoc(doc(this.firestore, 'users', uid), userData);

      console.log('Usuario registrado y guardado en Firestore');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}
