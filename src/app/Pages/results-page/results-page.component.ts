import { Component } from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {FooterComponent} from '../../Templates/footer/footer.component';

@Component({
  selector: 'app-results-page',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './results-page.component.html',
  styleUrl: './results-page.component.css'
})
export class ResultsPageComponent {

}

async function addRecipes(): Promise<void> {
  const params = new URLSearchParams(window.location.search);
  const searchName = params.get("nombre")?.toLowerCase() || "";
  const searchIngredients = params.get("ingredientes")?.toLowerCase().split(",") || [];
  const searchDifficulty = params.get("dificultad")?.toLowerCase() || "";
  const searchDuration = parseInt(params.get("duración") || '') || Infinity;

  try {
    const response = await fetch('/db.json');
    const data = await response.json();

    const container = document.querySelector('.image-container') as HTMLElement;
    container.innerHTML = '';

    const filteredRecipes = data.recipes.filter((recipe: any) => {
      const recipeTitle = recipe.title.toLowerCase();
      const recipeDifficulty = recipe.difficulty.toLowerCase();
      const recipeDuration = parseInt(recipe.duration);

      const normalizeIngredient = (ing: string): string[] => {
        return ing
          .replace(/[\d½¼¾\/]+/g, "")
          .trim()
          .replace(/s$/, "")
          .split(" ")
          .filter(word => word.length > 0)
          .map(word => word.trim().toLowerCase());
      };

      const recipeIngredients = recipe.ingredients.flatMap((ing: string) => normalizeIngredient(ing));

      const nameMatch = searchName ? recipeTitle.includes(searchName) : true;
      const ingredientsMatch = searchIngredients.length > 0
        ? searchIngredients.every(ing => recipeIngredients.includes(ing))
        : true;
      const difficultyMatch = searchDifficulty ? recipeDifficulty === searchDifficulty : true;
      const durationMatch = recipeDuration <= searchDuration;

      return nameMatch && ingredientsMatch && difficultyMatch && durationMatch;
    });

    for (const recipe of filteredRecipes) {
      const templateResponse = await fetch('/NewFoods/Templates/HTML/ImageTitleTextHorizontal.html');
      const template = await templateResponse.text();

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = template.trim();

      tempDiv.querySelectorAll(".icon-save, .icon-like").forEach(button => {
        button.addEventListener("click", event => {
          event.preventDefault();
          event.stopPropagation();
        });
      });

      const cardLink = tempDiv.querySelector('.card-link') as HTMLAnchorElement;

      cardLink.href = `/NewFoods/Pages/HTML/recipePage.html?id=${recipe.id}`;
      const img = cardLink.querySelector('img') as HTMLImageElement;
      img.src = recipe.image;
      img.alt = recipe.title;

      (cardLink.querySelector('h3') as HTMLElement).textContent = recipe.title;
      (cardLink.querySelector('.subtitle') as HTMLElement).textContent = recipe.subtitle;
      (cardLink.querySelector('.text') as HTMLElement).textContent = recipe.description;
      (cardLink.querySelector('.difficulty') as HTMLElement).textContent = recipe.difficulty;
      (cardLink.querySelector('.duration') as HTMLElement).textContent = recipe.duration;

      const likeButton = tempDiv.querySelector('.icon-like') as HTMLElement;
      const saveButton = tempDiv.querySelector('.icon-save') as HTMLElement;

      (likeButton.querySelector('.like-count') as HTMLElement).textContent = recipe.likes;
      (saveButton.querySelector('.save-count') as HTMLElement).textContent = recipe.saved;

      likeButton.addEventListener("click", () => updateRecipeStat(recipe.id, "likes", likeButton.querySelector('.like-count') as HTMLElement));
      saveButton.addEventListener("click", () => saveRecipeForUser(recipe.id, saveButton.querySelector('.save-count') as HTMLElement));

      container.appendChild(cardLink);
    }
  } catch (error) {
    console.error('Error cargando recetas:', error);
  }
}

async function updateRecipeStat(recipeId: number, field: string, countElement: HTMLElement): Promise<void> {
  try {
    const response = await fetch(`http://localhost:3000/recipes/${recipeId}`);
    const recipe = await response.json();
    const updatedValue = recipe[field] + 1;

    const updateResponse = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: updatedValue })
    });
    const updatedRecipe = await updateResponse.json();

    countElement.textContent = updatedRecipe[field];
  } catch (error) {
    console.error("Error actualizando la receta:", error);
  }
}

async function saveRecipeForUser(recipeId: number, countElement: HTMLElement): Promise<void> {
  const usuarioGuardado = localStorage.getItem("usuarioActual");
  const usuarioActual = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  if (!usuarioActual) {
    alert("Debes iniciar sesión para guardar recetas.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/usuarios/${usuarioActual.id}`);
    const user = await response.json();
    let savedRecipes: number[] = user.savedRecipes || [];

    if (!savedRecipes.includes(recipeId)) {
      savedRecipes.push(recipeId);
    } else {
      savedRecipes = savedRecipes.filter((id: number) => id !== recipeId);
    }

    await fetch(`http://localhost:3000/usuarios/${usuarioActual.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedRecipes })
    });

    alert("Receta guardada correctamente.");
    countElement.textContent = (parseInt(countElement.textContent || '0') + 1).toString();
  } catch (error) {
    console.error("Error al guardar receta:", error);
  }
}

