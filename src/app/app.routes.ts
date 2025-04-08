import { Routes } from '@angular/router';
import {ResultsPageComponent} from './Pages/results-page/results-page.component';
import {SearchPageComponent} from './Pages/search-page/search-page.component';
import {ProfilePageComponent} from './Pages/profile-page/profile-page.component';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {AuthGuard} from './guards/auth.guard';
import {Profile2Component} from './Pages/profile2/profile2.component';

export const routes: Routes = [
  { path: 'resultsPage', component: ResultsPageComponent},
  { path: 'searchPage', component: SearchPageComponent},
  { path: 'profilePage', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'profilePage2', component: Profile2Component, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
