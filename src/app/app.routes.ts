import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',   loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  { path: 'about',   loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
  { path: 'products', loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)},
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)},
];
