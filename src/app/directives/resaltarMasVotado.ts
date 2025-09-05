import { Directive, ElementRef, input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appResaltarMasVotado]',
})
export class ResaltarMasVotado implements OnChanges {
  esGanador = input<boolean>(false, { alias: 'appResaltarMasVotado' });
estaEmpatado = input<boolean>(false);

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges() {
  if (this.estaEmpatado()) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  } else if (this.esGanador()) {
    this.el.nativeElement.style.backgroundColor = 'lightgreen';
  } else {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
}
