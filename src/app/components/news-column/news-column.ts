import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-news-column',
  imports: [NgClass],
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
    },
    {
      title: 'Duda existencial',
      content: 'Grupo acabó el curso de robótica y no sabe qué hacer con los materiales',
      image: 'https://i.pinimg.com/1200x/32/ae/2f/32ae2ffe0dd1e3d3a6f97c09e5eaaf0e.jpg',
      date: 'Hace 2 semanas'
    },
    {
      title: 'Entrega de Proyecto ...',
      content: 'El plazo minimo de entrega de proyecto de calidad es para antes de la semana 7.',
      image: 'https://i.pinimg.com/736x/48/a2/b6/48a2b652e215c4bfe95f0a6839313240.jpg',
      date: 'Hace 10 minutos'
    },
  ];
  constructor(private favoritosService: FavoritosService) {}

  get favoritos() {
    return this.favoritosService.obtenerFavoritos();
  }
}
