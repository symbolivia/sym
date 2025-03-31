import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  downloadCatalog() {
    const link = document.createElement('a');
    link.href = '../../assets/images/catalog.pdf'; 
    link.download = 'catalog.pdf';
    link.click();
  }
}
