import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [ CommonModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  currentIndex = 2; // Default to the middle slide
  touchStartX = 0; // Track touch start position

  // Function to go to the next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 5;
  }

  // Function to go to the previous slide
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 5) % 5;
  }

  // Touch event handlers
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - this.touchStartX;

    // Swipe right (previous slide)
    if (deltaX > 50) {
      this.prevSlide();
    }
    // Swipe left (next slide)
    else if (deltaX < -50) {
      this.nextSlide();
    }
  }
}
