import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private firestore: Firestore, private auth: Auth) {}

  async crearReceta(receta: any): Promise<void> {
    const user = this.auth.currentUser;

    if (!user) {
      throw new Error('Usuario no autenticado');
    }

    const recetaCollection = collection(this.firestore, 'recipes');
    const recetaDocRef = await addDoc(recetaCollection, {
      ...receta,
      creatorId: user.uid // Guardamos el UID en la receta por referencia cruzada
    });

    const userRef = doc(this.firestore, 'users', user.uid);
    await updateDoc(userRef, {
      createdRecipes: arrayUnion(recetaDocRef.id)
    });
  }
}
