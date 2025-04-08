import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private router: Router) {}

  redirect($event: MouseEvent) {
    this.router.navigate(['/searchPage']);
  }
}
