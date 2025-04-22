// src/app/services/recipe.service.ts
import { Injectable } from '@angular/core';
import {Firestore, collection, getDocs, getDoc} from '@angular/fire/firestore';
import { doc } from '@angular/fire/firestore';

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
    const recipesList = recipeSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Recipe));
    return recipesList;
  }

  async getRecipeById(id: string): Promise<any> {
    const recetaDoc = await getDoc(doc(this.firestore, 'recipes', id));
    if (recetaDoc.exists()) {
      return { id: recetaDoc.id, ...recetaDoc.data() };
    } else {
      throw new Error('Receta no encontrada');
    }
  }

}
