import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNav } from './main-nav/main-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNav], //Importerar MainNav för att kunna använda i app.html
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab3Angular');
}
