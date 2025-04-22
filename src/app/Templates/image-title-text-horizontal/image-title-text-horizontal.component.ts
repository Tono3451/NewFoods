import { Component, Input } from '@angular/core';
import { Recipe } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-title-text-horizontal',
  templateUrl: './image-title-text-horizontal.component.html',
  styleUrls: ['./image-title-text-horizontal.component.css']
})
export class ImageTitleTextHorizontalComponent {
  @Input() recipe!: Recipe & { id: string };

  constructor(private router: Router) {}

  goToRecipePage() {
    this.router.navigate(['/recipe', this.recipe.id]); // /recipe/:id
  }
}
