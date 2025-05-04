import {Component, ViewChild, ElementRef, AfterViewChecked} from '@angular/core';
import { HeaderComponent } from '../../Templates/header/header.component';
import { TextInputComponent } from '../../Templates/text-input/text-input.component';
import { DropdownInputComponent } from '../../Templates/dropdown-input/dropdown-input.component';
import { SliderComponent } from '../../Templates/slider/slider.component';
import { ButtomComponent } from '../../Templates/buttom/buttom.component';
import { FooterComponent } from '../../Templates/footer/footer.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    HeaderComponent,
    TextInputComponent,
    DropdownInputComponent,
    SliderComponent,
    ButtomComponent,
    FooterComponent,
  ],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements AfterViewChecked {

  @ViewChild('text1') text1!: ElementRef;
  @ViewChild('text2') text2!: ElementRef;
  @ViewChild('text3') text3!: ElementRef;
  @ViewChild('text4') text4!: ElementRef;
  @ViewChild('buscar') buscarButton!: ButtomComponent;
  @ViewChild('nombre') nombreInput!: TextInputComponent;
  @ViewChild('ingredientes') ingredientesInput!: TextInputComponent;
  @ViewChild('dificultad') dificultadInput!: DropdownInputComponent;
  @ViewChild('duración') duracionSlider!: SliderComponent;
  @ViewChild('duracionSliderValue') duracionSliderValue!: SliderComponent;

  constructor(private router: Router) {}

  private initialized = false;

  ngAfterViewChecked(): void {
    if (this.initialized) return;

    if (this.text1) this.text1.nativeElement.textContent = 'Nombre receta';
    if (this.text2) this.text2.nativeElement.textContent = 'Ingredientes';
    if (this.text3) this.text3.nativeElement.textContent = 'Dificultad';
    if (this.text4) this.text4.nativeElement.textContent = 'Duración (Máxima)';


    if (this.buscarButton?.buttonRef?.nativeElement) {
      this.buscarButton.buttonRef.nativeElement.textContent = 'Buscar';

      if (this.nombreInput?.inputRef?.nativeElement) {
        this.nombreInput.inputRef.nativeElement.placeholder = 'Tortilla de patatas';
      }

      if (this.ingredientesInput?.inputRef?.nativeElement) {
        this.ingredientesInput.inputRef.nativeElement.placeholder = 'Cebolla';
      }

      this.initialized = true;
    }

  }

  handleBuscarClick($event: Event) {
    const nombre = this.nombreInput.inputRef.nativeElement.value;
    const ingredientes = this.ingredientesInput.inputRef.nativeElement.value;
    const dificultad = this.dificultadInput.inputRef.nativeElement.value;
    const duracion = this.duracionSliderValue?.valorSlider;

    console.log('Duración seleccionada en el slider:', duracion);

    const params = new URLSearchParams();
    if (nombre) params.append('nombre', nombre);
    if (ingredientes) params.append('ingredientes', ingredientes);
    if (dificultad) params.append('dificultad', dificultad);
    if (duracion !== undefined && duracion > 0) {
      params.append('duracion', duracion.toString());
    }

    this.router.navigate(['/resultsPage'], { queryParams: {
        nombre,
        ingredientes,
        dificultad,
        duracion
      }});

  }
}

