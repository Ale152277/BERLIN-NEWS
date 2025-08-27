import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
 links = [
    { name: 'Inicio', url: '/' },
    { name: 'Sobre nosotros', url: '/us' },
    { name: 'Noticias', url: '/news' },
  
  ];
}
