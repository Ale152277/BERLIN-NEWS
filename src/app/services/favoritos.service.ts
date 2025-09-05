import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  favoritos = signal<any[]>([]);

  agregarFavorito(noticia: any) {
    this.favoritos.update(favs => [...favs, noticia]);
  }

  obtenerFavoritos() {
    return this.favoritos();
  }
}