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
      title: 'Noticia 1', 
      content: 'Contenido de la noticia 1',
      image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/129658776/original.jpg',
      date:'Hace 30 minutos'
    },
    { 
      title: 'Noticia 2', 
      content: 'Contenido de la noticia 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx89qOf4VJue2m66yRi50RoFcgDvjbeC-WXcjA_s_CRPFZiiWepmasfFKjZmpFRCtg_LM&usqp=CAU',
      date:'Hace 1 hora'
    },
    { 
      title: 'Noticia 3', 
      content: 'Contenido de la noticia 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4hXyCDoCmz9UgyAdP0wxp7QPag2UdoRXqg&s',
      date:'Hace 1 hora'
    },
  ];
}
