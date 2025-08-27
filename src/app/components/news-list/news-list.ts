import { Component } from '@angular/core';

@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css'
})
export class NewsList {
   news = [
    { 
      title: 'Noticia 1', 
      content: 'Contenido de la noticia 1',
      image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/129658776/original.jpg'
    },
    { 
      title: 'Noticia 2', 
      content: 'Contenido de la noticia 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx89qOf4VJue2m66yRi50RoFcgDvjbeC-WXcjA_s_CRPFZiiWepmasfFKjZmpFRCtg_LM&usqp=CAU'
    },
    { 
      title: 'Noticia 3', 
      content: 'Contenido de la noticia 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4hXyCDoCmz9UgyAdP0wxp7QPag2UdoRXqg&s'
    },
  ];
}
