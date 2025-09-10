import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  //con any el arreglo recibira elementos de cualquier tipo :D
  private favoritos: any[] = [];   

  obtenerFavoritos() {
    return this.favoritos; //Solo devuelve la lista jejeje
  }

  agregarFavorito(item: any) {
    if (!this.favoritos.includes(item)) {
      this.favoritos.push(item); //Aqui es donde se añade uwu
    }
  }
}
