import { Component, Input } from '@angular/core';
import {Recipe, RecipeService} from '../../services/recipe.service';
import { Router } from '@angular/router';
import {Auth, onAuthStateChanged, User} from '@angular/fire/auth';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-image-title-text-horizontal',
  templateUrl: './image-title-text-horizontal.component.html',
  standalone: true,
  styleUrls: ['./image-title-text-horizontal.component.css']
})
export class ImageTitleTextHorizontalComponent {
  @Input() recipe!: Recipe & { id: string };
  userId: string = '';

  constructor(private router: Router, private recipeService: RecipeService,
              private auth: Auth, private userService: UserService,) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user: User | null) => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }


  goToRecipePage() {
    this.router.navigate(['/recipe', this.recipe.id]); // /recipe/:id
  }

  async onLikeClick() {
    if (!this.userId || !this.recipe?.id) return;
    const updated = await this.recipeService.toggleLike(this.recipe.id, this.userId);
    this.recipe.likes = updated.likes;
  }

  async onSaveClick() {
    if (!this.userId || !this.recipe?.id) return;
    const updated = await this.recipeService.toggleSave(this.recipe.id, this.userId);
    this.recipe.saved = updated.saved;

    if (updated.savedBy.includes(this.userId)) {
      await this.userService.addRecipeToSaved(this.userId, this.recipe.id);
    } else {
      await this.userService.removeRecipeFromSaved(this.userId, this.recipe.id);
    }
  }
}
