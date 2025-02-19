import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  inputValue: string = '';
  contact = {
    name: '',
    lastName: '',
    phone: '',
    email: '',
    comments: '',
  };

  onSubmit() {
    console.log('Form Submitted', this.contact);
    // Here you can add your form submission logic, e.g., sending data to a server
  }
}
