import { Routes } from '@angular/router';
import {ResultsPageComponent} from './Pages/results-page/results-page.component';
import {SearchPageComponent} from './Pages/search-page/search-page.component';
import {ProfilePageComponent} from './Pages/profile-page/profile-page.component';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  { path: 'resultsPage', component: ResultsPageComponent},
  { path: 'searchPage', component: SearchPageComponent},
  { path: 'profilePage', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'loginPage', component: LoginPageComponent },
  { path: '**', redirectTo: 'login' }
];
