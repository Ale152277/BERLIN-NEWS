import { Directive, ElementRef, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltarMasVotado]',
})
export class ResaltarMasVotado {
  esGanador = input<boolean>(false, { alias: 'appResaltarMasVotado' });

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges() {
    if (this.esGanador()) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color', '#2cff7b'
      );
     
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
