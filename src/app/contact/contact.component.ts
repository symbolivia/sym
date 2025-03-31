import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslateModule, ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form Data:", this.contactForm.value);
      const message = `Hola soy ${this.contactForm.value["name"]} ${this.contactForm.value["lastName"]}, mi correo es ${this.contactForm.value["email"]}, mi telefono es ${this.contactForm.value["phone"]} y tengo una consulta: ${this.contactForm.value["comments"]}`;
      window.open(`https://wa.me/59175989562?text=${message}`);
    } else {
      console.log("Form is invalid");
    }
  }
}
