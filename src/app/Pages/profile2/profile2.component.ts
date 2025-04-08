import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ImageTextVerticalComponent} from '../../Templates/image-text-vertical/image-text-vertical.component';
import {HeaderComponent} from '../../Templates/header/header.component';
import {FooterComponent} from '../../Templates/footer/footer.component';

@Component({
  selector: 'app-profile2',
  imports: [
    RouterLink,
    ImageTextVerticalComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './profile2.component.html',
  styleUrl: './profile2.component.css'
})
export class Profile2Component {

}
