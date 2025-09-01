import { Component, signal } from '@angular/core';
import { NewsList } from './components/news-list/news-list';
import { Header } from './components/header/header';
import { NewsColumn } from './components/news-column/news-column';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [NewsList, NewsColumn, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('berlin-blog');
}
