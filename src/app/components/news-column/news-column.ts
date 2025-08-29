import { Component } from '@angular/core';

@Component({
  selector: 'app-news-column',
  imports: [],
  templateUrl: './news-column.html',
  styleUrl: './news-column.css'
})
export class NewsColumn {
  newsColumn = [
    {
      title: 'Soluciones Web ...',
      content: 'Berlín completó su segunda exposición.',
      image: 'https://i.pinimg.com/736x/e7/c3/0a/e7c30a496f139a660a223cdf9f8e4489.jpg',
      date: 'Hace 30 minutos'
    },
    {
      title: 'Machine Learning',
      content: 'Cruce de horario dejó al grupo fuera de juego.',
      image: 'https://i.pinimg.com/1200x/2c/55/93/2c55935429db0106566d198c4d7a9f52.jpg',
      date: 'Hace 1 hora'
    },
    {
      title: 'Inicio de Proyecto',
      content: 'Nuevo Proyecto: ¿Qué será?',
      image: 'https://i.pinimg.com/1200x/77/64/82/776482237f287021ea2c72689fa59a18.jpg',
      date: 'Hace 2 horas'
    }
  ];
}
