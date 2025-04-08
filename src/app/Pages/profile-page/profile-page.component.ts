import { Component } from '@angular/core';
import {HeaderComponent} from '../../Templates/header/header.component';
import {FooterComponent} from '../../Templates/footer/footer.component';
import {AvatarComponent} from '../../Templates/avatar/avatar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    RouterLink
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
