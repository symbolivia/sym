import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from './products.data';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = PRODUCTS;
}

