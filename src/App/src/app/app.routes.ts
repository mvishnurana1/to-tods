import { Routes } from '@angular/router';
import { HomePageComponent, ErrorPageComponent, SettingsPageComponent } from '../pages';

export const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: HomePageComponent },
    { path: 'settings', component: SettingsPageComponent },
    { path: '**', component: ErrorPageComponent },
];
