import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})

export class DropdownDirective {
  dropdownMenu: HTMLElement;
  isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');

    if (!this.isOpen) {
      this.renderer.addClass(this.el.nativeElement, 'show');
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'show');
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}
