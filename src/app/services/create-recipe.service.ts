import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private firestore: Firestore) {}

  async crearReceta(receta: any): Promise<void> {
    const recetaCollection = collection(this.firestore, 'recipes');
    await addDoc(recetaCollection, receta);
  }
}
