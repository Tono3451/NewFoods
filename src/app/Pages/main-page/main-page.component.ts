import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { LoginServiceService } from '../../services/login-service.service';
import { UserService } from '../../services/user.service';
import { RecipeService } from '../../services/recipe.service';
import { HeaderComponent } from '../../Templates/header/header.component';
import { FooterComponent } from '../../Templates/footer/footer.component';
import { ButtomComponent } from '../../Templates/buttom/buttom.component';
import { ImageTitleTextHorizontalComponent } from '../../Templates/image-title-text-horizontal/image-title-text-horizontal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ButtomComponent,
    ImageTitleTextHorizontalComponent,
    CommonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  recipes: any[] = [];
  selectedFilter: 'dateTime' | 'likes' | 'saved' = 'dateTime';

  constructor(
    private loginServiceService: LoginServiceService,
    private userService: UserService,
    private recipeService: RecipeService
  ) {}

  async ngOnInit() {
    onAuthStateChanged(this.loginServiceService['auth'], async (user) => {
      if (user) {
        try {
          const userData = await this.userService.getUserDataFromFirestore(user.uid);
          console.log('Datos del usuario desde Firestore:', userData);

          // Obtener las recetas de todos los usuarios
          this.recipes = await this.recipeService.getAllRecipes();
          console.log('Recetas obtenidas:', this.recipes);
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      } else {
        console.log('No hay usuario autenticado.');
      }
    });
    await this.loadRecipes();
  }

  async loadRecipes() {
    this.recipes = await this.recipeService.getRecipesOrderedBy(this.selectedFilter);
  }

  async changeFilter(filter: 'dateTime' | 'likes' | 'saved') {
    this.selectedFilter = filter;
    await this.loadRecipes();
  }
}
