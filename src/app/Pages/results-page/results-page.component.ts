import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Templates/header/header.component';
import { FooterComponent } from '../../Templates/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { RecipeService, Recipe } from '../../services/recipe.service';
import {
  ImageTitleTextHorizontalComponent
} from '../../Templates/image-title-text-horizontal/image-title-text-horizontal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ImageTitleTextHorizontalComponent, CommonModule],
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  recipes: (Recipe & { id: string })[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      const nombre = params['nombre']?.toLowerCase() || '';
      const ingredientes = params['ingredientes']?.toLowerCase().split(',') || [];
      const dificultad = params['dificultad']?.toLowerCase() || '';
      let duracion = Infinity;
      if (params['duracion'] !== undefined && !isNaN(parseInt(params['duracion']))) {
        duracion = parseInt(params['duracion']);
      }

      console.log("Parámetros recibidos:", { nombre, ingredientes, dificultad, duracion });

      await this.addRecipes(nombre, ingredientes, dificultad, duracion);
    });
  }

  async addRecipes(
    searchName: string,
    searchIngredients: string[],
    searchDifficulty: string,
    searchDuration: number
  ): Promise<void> {
    try {
      const data = await this.recipeService.getAllRecipes();
      console.log("Recetas desde Firestore:", data);

      this.recipes = data
        .filter((recipe: Recipe) => recipe.id !== undefined)
        .filter((recipe: Recipe) => {
          const recipeTitle = recipe.title?.toLowerCase() || "";
          const recipeDifficulty = recipe.difficulty?.toLowerCase() || "";
          const recipeDuration = Number(recipe.duration) || 0;

          const normalizeIngredient = (ing: string): string[] => {
            return ing
              .replace(/[\d½¼¾\/]+/g, "")
              .trim()
              .replace(/s$/, "")
              .split(" ")
              .filter(word => word.length > 0)
              .map(word => word.trim().toLowerCase());
          };

          const recipeIngredients = (recipe.ingredients || []).flatMap((ing: string) => normalizeIngredient(ing));

          const nameMatch = searchName ? recipeTitle.includes(searchName) : true;
          const ingredientsMatch = searchIngredients.some(ing => ing.trim() !== '')
            ? searchIngredients.every(ing => recipeIngredients.includes(ing.trim().toLowerCase()))
            : true;
          const difficultyMatch = searchDifficulty ? recipeDifficulty === searchDifficulty : true;
          const durationMatch = recipeDuration <= searchDuration;

          return nameMatch && ingredientsMatch && difficultyMatch && durationMatch;
        }) as (Recipe & { id: string })[];

      console.log("Recetas filtradas:", this.recipes);

    } catch (error) {
      console.error('Error cargando recetas desde Firestore:', error);
    }
  }
}
