import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-card-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './product-card-detail.component.html',
  styleUrl: './product-card-detail.component.scss'
})
export class ProductCardDetailComponent {
  @Input() product: any;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  colorOptions = [
    { id: 'default', translationKey: 'PRODUCT_DETAIL.COLORS.DEFAULT' },
    { id: 'red', translationKey: 'PRODUCT_DETAIL.COLORS.RED' },
    { id: 'blue', translationKey: 'PRODUCT_DETAIL.COLORS.BLUE' },
    { id: 'black', translationKey: 'PRODUCT_DETAIL.COLORS.BLACK' }
  ];

  techSpecsKeys = [
    { key: 'DIMENSIONS', labelKey: 'PRODUCT_DETAIL.DIMENSIONS', valueKey: 'PRODUCT_DETAIL.TECH_SPECS.DIMENSIONS' },
    { key: 'WEIGHT', labelKey: 'PRODUCT_DETAIL.WEIGHT', valueKey: 'PRODUCT_DETAIL.TECH_SPECS.WEIGHT' },
    { key: 'MATERIAL', labelKey: 'PRODUCT_DETAIL.MATERIAL', valueKey: 'PRODUCT_DETAIL.TECH_SPECS.MATERIAL' },
    { key: 'CAPACITY', labelKey: 'PRODUCT_DETAIL.CAPACITY', valueKey: 'PRODUCT_DETAIL.TECH_SPECS.CAPACITY' }
  ];

  close(): void {
    this.closeModal.emit();
  }
}
