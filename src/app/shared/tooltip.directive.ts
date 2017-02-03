import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  tooltipElement: HTMLElement = document.createElement('div');

  @Input()
  set tooltip(newVal) {
    this.tooltipElement.innerText = newVal;
  }

  constructor(private elementRef: ElementRef) {
    this.tooltipElement.className = 'my-tooltip';
  }

  @HostListener('mouseenter')
  onMouseEnter () {
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }
  @HostListener('mouseleave')
  onMouseLeave () {
    //debugger;
    this.elementRef.nativeElement.removeChild(this.tooltipElement);
  }
}
