import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[app-dropdown]'
})
export class DropDownDirective {

  @HostBinding('class.show')isOpen: boolean = false;

  @HostListener('click')
  toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
