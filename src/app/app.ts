import { Component, signal } from '@angular/core';
import { NewsList } from './components/news-list/news-list';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [NewsList, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('berlin-blog');
}
