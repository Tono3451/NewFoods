import { Component } from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {AvatarComponent} from '../../Templates/avatar/avatar.component';

@Component({
  selector: 'app-profile-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
