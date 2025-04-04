import { Component } from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {ButtomComponent} from '../../Templates/buttom/buttom.component';
import {
  ImageTitleTextHorizontalComponent
} from '../../Templates/image-title-text-horizontal/image-title-text-horizontal.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    ButtomComponent,
    ImageTitleTextHorizontalComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
