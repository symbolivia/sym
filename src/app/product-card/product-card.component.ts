import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ProductCardDetailComponent } from '../product-card-detail/product-card-detail.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TranslateModule, CommonModule, ProductCardDetailComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any;
  isModalOpen = false;
  
  openModal(): void {
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
  }
}
