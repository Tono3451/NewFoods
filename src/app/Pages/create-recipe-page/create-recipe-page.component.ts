import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {GetImageComponent} from '../../Templates/get-image/get-image.component';
import {TextInput2Component} from '../../Templates/text-input2/text-input2.component';
import {DropdownInputComponent} from '../../Templates/dropdown-input/dropdown-input.component';
import {NumberInputComponent} from '../../Templates/number-input/number-input.component';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {RecetaService} from '../../services/create-recipe.service';

@Component({
  selector: 'app-create-recipe-page',
  imports: [
    HeaderComponent,
    GetImageComponent,
    TextInput2Component,
    DropdownInputComponent,
    NumberInputComponent,
    ButtomComponent,
    FooterComponent
  ],
  templateUrl: './create-recipe-page.component.html',
  standalone: true,
  styleUrl: './create-recipe-page.component.css'
})
export class CreateRecipePageComponent {
  @ViewChild('recipeTitle') recipeTitle!: TextInput2Component;
  @ViewChild('recipeSubtitle') recipeSubtitle!: TextInput2Component;
  @ViewChild('descriptionText1') descriptionText1!: TextInput2Component;
  @ViewChild('difficultyInput') difficultyInput!: DropdownInputComponent;
  @ViewChild('durationInput') durationInput!: NumberInputComponent;
  @ViewChild('getImage') getImage!: GetImageComponent;
  @ViewChild('calories') getCalories!: NumberInputComponent;
  @ViewChild('carbohydrates') carbohydratesInput!: NumberInputComponent;
  @ViewChild('proteins') proteinsInput!: NumberInputComponent;
  @ViewChild('fats') fatsInput!: NumberInputComponent;
  @ViewChild('fiber') fiberInput!: NumberInputComponent;
  @ViewChild('calories') caloriesInput!: NumberInputComponent;

  constructor(private createRecipeService: RecetaService) {
  }

  async crearReceta() {
    const title = this.recipeTitle.inputRef.nativeElement.value;
    const subtitle = this.recipeSubtitle.inputRef.nativeElement.value;
    const description = this.descriptionText1.inputRef.nativeElement.value;
    const difficulty = this.difficultyInput.inputRef.nativeElement.value;
    const duration = this.durationInput.inputRef.nativeElement.value;
    const calories = this.caloriesInput.inputRef.nativeElement.value + ' kcal';
    const carbohydrates = this.carbohydratesInput.inputRef.nativeElement.value + 'g';
    const proteins = this.proteinsInput.inputRef.nativeElement.value + 'g';
    const fats = this.fatsInput.inputRef.nativeElement.value + 'g';
    const fiber = this.fiberInput.inputRef.nativeElement.value + 'g';

    const ingredientsText = (document.getElementById('add-text-block') as HTMLTextAreaElement)?.value || '';
    const stepsText = (document.getElementById('description-text2') as HTMLTextAreaElement)?.value || '';
    const ingredients = ingredientsText.split('\n').filter(i => i.trim() !== '');
    const steps = stepsText.split('\n').filter(p => p.trim() !== '');

    const fileInput = this.getImage.fileInput.nativeElement;
    const file = fileInput?.files?.[0];

    let imageBase64 = '';

    if (file) {
      imageBase64 = await this.convertFileToBase64(file);
    }

    const receta = {
      title,
      subtitle,
      image: imageBase64,
      description,
      difficulty,
      duration,
      ingredients,
      steps,
      nutrition: {
        calories,
        carbohydrates,
        proteins,
        fats,
        fiber
      },
      likes: 0,
      saved: 0,
      dateTime: new Date()
    };

    await this.createRecipeService.crearReceta(receta);
    alert('Receta creada correctamente');
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
