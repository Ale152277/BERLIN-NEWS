import { Component } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css'
})
export class NewsList {
  news = [
    {
      title: 'Berlín arranca el 2025',
      content: 'Con café, trabajos en grupo y mucha fe en que esta vez no habrá tanto estrés.',
      image: 'https://i.pinimg.com/1200x/3a/48/55/3a485576f4790764f776f7edf90fa0c5.jpg'
    },
    {
      title: 'Nuevo Integrante en Berlín',
      content: 'El nuevo integrante promete esfuerzo: listo para trabajos y largas madrugadas.',
      image: 'https://i.pinimg.com/1200x/27/69/8d/27698d16ddecb32750443ea7bdd73477.jpg'
    },
    {
      title: '¿Berlín se separa? - Inicio ciclo 2025-2',
      content: 'El grupo sufrió bajas estratégicas: la guerra contra el sistema de matrícula continúa.',
      image: 'https://i.pinimg.com/736x/72/25/37/722537c9b8ee837148dd36b44b85a41e.jpg'
    },
  ];

  constructor(private favoritos: FavoritosService) { }

  marcarFavorito(item: any) {
    this.favoritos.agregarFavorito(item);
  }
}
