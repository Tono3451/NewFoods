// src/app/services/recipe.service.ts
import {Injectable} from '@angular/core';
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  getDocs,
  updateDoc
} from '@angular/fire/firestore';

export interface Recipe {
  id?: string; //
  title: string;
  subtitle: string;
  image: string;
  description: string;
  difficulty: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  nutrition: {
    calories: string;
    carbohydrates: string;
    proteins: string;
    fats: string;
    fiber: string;
  };
  likes: number;
  saved: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private firestore: Firestore) {}

  async getAllRecipes(): Promise<Recipe[]> {
    const recipesCol = collection(this.firestore, 'recipes');
    const recipeSnapshot = await getDocs(recipesCol);
    return recipeSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Recipe));
  }

  async getRecipeById(id: string): Promise<any> {
    const recetaDoc = await getDoc(doc(this.firestore, 'recipes', id));
    if (recetaDoc.exists()) {
      return { id: recetaDoc.id, ...recetaDoc.data() };
    } else {
      throw new Error('Receta no encontrada');
    }
  }

  private async getRecipeWithRef(recipeId: string): Promise<{ ref: DocumentReference, data: any }> {
    const recipeRef = doc(this.firestore, 'recipes', recipeId);
    const recipeSnap = await getDoc(recipeRef);

    if (!recipeSnap.exists()) {
      throw new Error('Receta no encontrada');
    }

    return { ref: recipeRef, data: recipeSnap.data() };
  }

  async toggleLike(recipeId: string, userId: string): Promise<any> {
    const { ref, data } = await this.getRecipeWithRef(recipeId);
    const likedBy = data['likedBy'] || [];

    const hasLiked = likedBy.includes(userId);

    await updateDoc(ref, {
      likedBy: hasLiked ? arrayRemove(userId) : arrayUnion(userId),
      likes: hasLiked ? data['likes'] - 1 : data['likes'] + 1
    });

    const updatedSnap = await getDoc(ref);
    return { id: updatedSnap.id, ...updatedSnap.data() };
  }

  async toggleSave(recipeId: string, userId: string): Promise<any> {
    const { ref, data } = await this.getRecipeWithRef(recipeId);
    const savedBy = data['savedBy'] || [];

    const hasSaved = savedBy.includes(userId);

    await updateDoc(ref, {
      savedBy: hasSaved ? arrayRemove(userId) : arrayUnion(userId),
      saved: hasSaved ? data['saved'] - 1 : data['saved'] + 1
    });

    const updatedSnap = await getDoc(ref);
    return { id: updatedSnap.id, ...updatedSnap.data() };
  }
}

