import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Templates/header/header.component';
import { FooterComponent } from '../../Templates/footer/footer.component';
import { AvatarComponent } from '../../Templates/avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { LoginServiceService } from '../../services/login-service.service';
import {onAuthStateChanged} from '@angular/fire/auth';
import {RecipeService} from '../../services/recipe.service';
import {
  ImageTitleTextHorizontalComponent
} from '../../Templates/image-title-text-horizontal/image-title-text-horizontal.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CommonModule,
    ImageTitleTextHorizontalComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  nombre: string = 'Usuario';
  recipesCreated:   any[] = [];
  recipesSaved:   any[] = [];

  showSavedRecipesFlag: boolean = true;

  constructor(
    private userService: UserService,
    private loginServiceService: LoginServiceService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    onAuthStateChanged(this.loginServiceService['auth'], async (user) => {
      if (user) {
        try {
          const userData = await this.userService.getUserDataFromFirestore(user.uid);
          console.log('Datos del usuario desde Firestore:', userData);

          this.nombre = userData.nombre;

          await this.getUserCreatedRecipes(userData.createdRecipes);
          await this.getUserSavedRecipes(userData.savedRecipes);

        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      } else {
        console.log('No hay usuario autenticado.');
      }
    });
  }


  async getUserCreatedRecipes(recipeUIDs: string[]) {
    try {
      for (let i = 0; i < recipeUIDs.length; i++) {
        // Usa await para esperar a que la promesa se resuelva
        const recipe = await this.recipeService.getRecipeById(recipeUIDs[i]);

        // Ahora puedes acceder a las propiedades del objeto recipe
        this.recipesCreated.push(recipe);
      }
    } catch (error) {
      console.error('Error al obtener recetas:', error);
    }
  }

  async getUserSavedRecipes(recipeUIDs: string[]) {
    try {
      for (let i = 0; i < recipeUIDs.length; i++) {
        // Usa await para esperar a que la promesa se resuelva
        const recipe = await this.recipeService.getRecipeById(recipeUIDs[i]);

        // Ahora puedes acceder a las propiedades del objeto recipe
        this.recipesSaved.push(recipe);
      }
    } catch (error) {
      console.error('Error al obtener recetas:', error);
    }
  }

  showSavedRecipes() {
    this.showSavedRecipesFlag = true;
  }

  showCreatedRecipes() {
    this.showSavedRecipesFlag = false;
  }
}
