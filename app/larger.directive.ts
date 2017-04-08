import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[mwLarger]'
})
export class LargerDirective {

  @HostBinding('class.is-larger-hovering') larger = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.larger = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.larger = false;
  }

  @Input() set mwLarger(value) {
    this.larger = value;
  }
}
