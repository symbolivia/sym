import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { PRODUCTS } from '../products/products.data';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CommonModule, TranslateModule, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Get a subset of featured products to display on home page (first 6 products)
  featuredProducts = PRODUCTS.slice(0, 6);
}
