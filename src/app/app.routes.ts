import { Routes } from '@angular/router';
import {ResultsPageComponent} from './Pages/results-page/results-page.component';
import {SearchPageComponent} from './Pages/search-page/search-page.component';

export const routes: Routes = [
  { path: 'resultsPage', component: ResultsPageComponent},
  { path: 'searchPage', component: SearchPageComponent},
];
