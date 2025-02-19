import { Directive, ElementRef, EventEmitter, Injectable, HostListener, Input, Output } from '@angular/core';

@Directive({standalone: true, selector: "[rmScrollSpy]"})
export class ScrollSpyDirective {

  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection!: string;

  constructor(public _el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let currentSection = '';
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollingElement.scrollTop;
    console.log(scrollTop);
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
        console.log(element.id + ' offsettop ' + element.offsetTop);
        if (element.offsetTop <= scrollTop) {
          currentSection = element.id;
        }
    }

    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}
