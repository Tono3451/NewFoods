// src/app/services/recipe.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { doc } from '@angular/fire/firestore';

export interface Recipe {
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

  // Obtener recetas de Firestore
  async getAllRecipes(): Promise<Recipe[]> {
    const recipesCol = collection(this.firestore, 'recipes');
    const recipeSnapshot = await getDocs(recipesCol);
    const recipesList = recipeSnapshot.docs.map(doc => doc.data() as Recipe);
    return recipesList;
  }
}
