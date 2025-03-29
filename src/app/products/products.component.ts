import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { name: 'Super Mario Bros', description: 'this is a cup of mario bros', price: 10, imageUrl: 'assets/images/products/mario.jpg' },
    { name: 'Dia del niño', description: 'dia del niño', price: 20, imageUrl: 'assets/images/products/kid-day.jpg' },
    { name: 'Pinguino', description: 'Pinguino', price: 30, imageUrl: 'assets/images/products/kawai-penguin.jpg' },
    { name: 'Cafe', description: 'Cafe', price: 40, imageUrl: 'assets/images/products/coffee.jpg' },
    { name: 'Feliz dia mama', description: 'Feliz dia mama', price: 50, imageUrl: 'assets/images/products/mami.jpg' },
    { name: 'Happy birthday', description: 'Happy birthday', price: 60, imageUrl: 'assets/images/products/happy-birthday.jpg' },
    { name: 'Harry Potter', description: 'Harry Potter', price: 70, imageUrl: 'assets/images/products/harry-potter.jpg' },
    { name: 'Sherk', description: 'Sherk', price: 80, imageUrl: 'assets/images/products/sherk.jpg' },
    { name: 'Pinky', description: 'Pinky', price: 90, imageUrl: 'assets/images/products/pinky.jpg' },
    { name: 'Totoro', description: 'Totoro', price: 100, imageUrl: 'assets/images/products/totoro.jpg' },
    { name: 'Bolivia', description: 'Bolivia', price: 110, imageUrl: 'assets/images/products/bolivia.jpg' },
    { name: 'Panda', description: 'Panda', price: 120, imageUrl: 'assets/images/products/panda.jpg' },
    { name: 'Pandas', description: 'Pandas', price: 230, imageUrl: 'assets/images/products/pandas.jpg' },
    { name: 'Beer', description: 'Beer', price: 130, imageUrl: 'assets/images/products/beer.jpg' },
    { name: 'Coca cola', description: 'Coca cola', price: 140, imageUrl: 'assets/images/products/coca-cola.jpg' },
    { name: 'One piece', description: 'One piece', price: 150, imageUrl: 'assets/images/products/one-piece.jpg' },
    { name: 'Roblox', description: 'Roblox', price: 160, imageUrl: 'assets/images/products/roblox.jpg' },
    { name: 'Free fire', description: 'Free fire', price: 170, imageUrl: 'assets/images/products/free-fire.jpg' },
    { name: 'Real Madrid', description: 'Real Madrid', price: 180, imageUrl: 'assets/images/products/real-madrid.jpg' },
    { name: 'Barcelona', description: 'Barcelona', price: 190, imageUrl: 'assets/images/products/barcelona.jpg' },
    { name: 'Amazon', description: 'Amazon', price: 200, imageUrl: 'assets/images/products/amazon.jpg' },
    { name: 'Gato', description: 'Gato', price: 210, imageUrl: 'assets/images/products/cat.jpg' },
    { name: 'Perro', description: 'Perro', price: 220, imageUrl: 'assets/images/products/dog.jpg' },
    { name: 'Hombre de nieve', description: 'Hombre de nieve', price: 240, imageUrl: 'assets/images/products/snowman.jpg' },
    { name: 'Cara de gato', description: 'Cara de gato', price: 250, imageUrl: 'assets/images/products/cat-face.jpg' },
    { name: 'BTS kawaii', description: 'BTS kawaii', price: 260, imageUrl: 'assets/images/products/bts-kawai.jpg' },
    { name: 'BTS', description: 'BTS', price: 270, imageUrl: 'assets/images/products/bts.jpg' },
    { name: 'Los Simpsons', description: 'Los Simpsons', price: 280, imageUrl: 'assets/images/products/the-simpsons.jpg' },
    { name: 'Los vengadores', description: 'Los vengadores', price: 290, imageUrl: 'assets/images/products/avengers.jpg' },
    { name: 'Maestro', description: 'Maestro', price: 300, imageUrl: 'assets/images/products/maestro.jpg' }
  ];
}
