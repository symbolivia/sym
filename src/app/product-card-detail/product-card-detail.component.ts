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

  quantity = 1;
  selectedColor = 'default';
  selectedModel = 'standard';

  // Available color options
  colorOptions = [
    { id: 'default', name: 'Default' },
    { id: 'red', name: 'Red' },
    { id: 'blue', name: 'Blue' },
    { id: 'black', name: 'Black' }
  ];

  // Technical specifications
  technicalSpecs = {
    dimensions: '8.5 x 7.8 x 3.9 inches',
    weight: '330g',
    material: 'Ceramic',
    capacity: '330ml'
  };

  close(): void {
    this.closeModal.emit();
  }
}
