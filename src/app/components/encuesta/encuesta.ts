import { Component } from '@angular/core';
import { Curso } from '../curso/curso';

@Component({
  selector: 'app-encuesta',
  imports: [Curso],
  templateUrl: './encuesta.html',
  styleUrl: './encuesta.css',
})
export class Encuesta {
  cursos = [
    {
      nombre: 'Soluciones Web',
      votos: 0,
      imagen:
        'https://servicioshosting.com/wp-content/uploads/2024/12/SECCION-SOLUCIONES-WEB-03-1.png',
    },

    {
      nombre: 'Redes',
      votos: 0,
      imagen:
        'https://a.storyblok.com/f/169662/1254x836/a42741bf0c/redes-industriais.jpg',
    },
    {
      nombre: 'Robótica',
      votos: 0,
      imagen:
        'https://www.teslaelectronic.com.pe/wp-content/uploads/2025/05/Brazo-Robot-Avanzado-Arduino-6A.png',
    },
    {
      nombre: 'MOANSO',
      votos: 0,
      imagen:
        'https://mwebs.com.uy/imagenes/noticias/qu%C3%A9-es-el-desarrollo-incremental-184-chica.jpg',
    },
  ];

  sumarVoto(nombreCurso: string) {
    this.cursos = this.cursos.map((c) =>
      c.nombre === nombreCurso ? { ...c, votos: c.votos + 1 } : c
    );
  }

  totalVotos() {
    return this.cursos.reduce((s, c) => s + c.votos, 0);
  }
  cursoGanador() {
    const maxVotos = Math.max(...this.cursos.map((c) => c.votos));
    const empatados = this.cursos.filter((c) => c.votos === maxVotos);

    return empatados.length === 1 ? empatados[0].nombre : null;
  }

  cursosEmpatados() {
    const total = this.totalVotos();
    if (total === 0) return [];

    const maxVotos = Math.max(...this.cursos.map((c) => c.votos));
    const empatado = this.cursos.filter((c) => c.votos === maxVotos);
    return empatado.length > 1 ? empatado.map((c) => c.nombre) : [];
  }
}
