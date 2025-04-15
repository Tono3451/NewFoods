import { Routes } from '@angular/router';
import {ResultsPageComponent} from './Pages/results-page/results-page.component';
import {SearchPageComponent} from './Pages/search-page/search-page.component';
import {ProfilePageComponent} from './Pages/profile-page/profile-page.component';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {AuthGuard} from './guards/auth.guard';
import {Profile2Component} from './Pages/profile2/profile2.component';
import {MainPageComponent} from './Pages/main-page/main-page.component';
import {RegisterPageComponent} from './Pages/register-page/register-page.component';
import {CreateRecipePageComponent} from './Pages/create-recipe-page/create-recipe-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'resultsPage', component: ResultsPageComponent},
  { path: 'searchPage', component: SearchPageComponent},
  { path: 'profilePage', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'profilePage2', component: Profile2Component, canActivate: [AuthGuard] },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'registerPage', component: RegisterPageComponent },
  { path: 'createRecipePage', component: CreateRecipePageComponent },
];
