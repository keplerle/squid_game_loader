import { Component, signal } from '@angular/core';
import { SquidGameLoader } from '../../projects/squid-game-loader/src/lib/squid-game-loader';

@Component({
  selector: 'app-root',
  imports: [SquidGameLoader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('squid');
}
