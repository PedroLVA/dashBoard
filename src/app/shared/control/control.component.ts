import { Component, ContentChild, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }

})
export class ControlComponent {
  @Input({required: true}) label!: string;
  //@HostListener('click') 
  //@HostBinding('class') className = 'control';

  private el = inject(ElementRef)
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  onClick(){
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
  }

  
}
