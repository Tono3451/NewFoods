import { Injectable } from '@angular/core';
import {Firestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: Firestore) {}

  async getUserDataFromFirestore(uid: string): Promise<any> {
    const userDocRef = doc(this.firestore, 'users', uid);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error('No se encontró el documento del usuario en Firestore.');
    }
  }

  async addRecipeToSaved(uid: string, recipeId: string) {
    const userDocRef = doc(this.firestore, 'users', uid);
    await updateDoc(userDocRef, {
      savedRecipes: arrayUnion(recipeId)
    });
  }

  async removeRecipeFromSaved(uid: string, recipeId: string) {
    const userDocRef = doc(this.firestore, 'users', uid);
    await updateDoc(userDocRef, {
      savedRecipes: arrayRemove(recipeId)
    });
  }
}
