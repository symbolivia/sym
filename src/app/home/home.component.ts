import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { PRODUCTS } from '../products/products.data';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CommonModule, TranslateModule, FeaturedProductsComponent, ScrollToTopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProducts = PRODUCTS.slice(0, 5);
}
