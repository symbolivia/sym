import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  closeSidebar() {
    const checkbox = document.getElementById('sidebar-active') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
