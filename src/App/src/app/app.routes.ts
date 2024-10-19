import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages';

export const routes: Routes = [{ path: '', redirectTo: 'app', pathMatch: 'full' },
{ path: 'app', component: HomePageComponent }
];
