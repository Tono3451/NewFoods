import { Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {HeaderComponent} from '../../Templates/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recipe-page',
  imports: [
    FooterComponent,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent implements OnInit {
  receta: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  async ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.receta = await this.recipeService.getRecipeById(recipeId);
    }
  }
}
