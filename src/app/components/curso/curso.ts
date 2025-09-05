import { Component, input, output } from '@angular/core';
import { ResaltarMasVotado } from '../../directives/resaltarMasVotado';


@Component({
  selector: 'app-curso',
  standalone: true, 
  imports: [ResaltarMasVotado],
  templateUrl: './curso.html',
  styleUrl: './curso.css',
})
export class Curso {
  nombre = input<string>('');
  votos = input<number>(0);
  imagen = input<string>('');
  voto = output<string>();
  esGanador = input<boolean>(false);
  estaEmpatado = input<boolean>(false);


  votar() {
    this.voto.emit(this.nombre());
  }
}
