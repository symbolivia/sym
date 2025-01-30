import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [ CommonModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 2;
  touchStartX = 0;
  private intervalId: ReturnType<typeof setInterval> | undefined;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 5;
  }

  manualNextSlide() {
    this.stopAutoSlide();
    this.nextSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 5) % 5;
  }

  manualPrevSlide() {
    this.stopAutoSlide();
    this.prevSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide() {
    if(this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  onSlideClick(index: number) {
    this.stopAutoSlide();
  }

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
