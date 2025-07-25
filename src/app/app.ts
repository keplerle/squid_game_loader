import { Component, signal } from '@angular/core';
import { SquidGameLoader } from '../../projects/squid-game-loader/src/lib/squid-game-loader';
import { TestHttpComponent } from '../test-http/test-http';

@Component({
  selector: 'app-root',
  imports: [SquidGameLoader, TestHttpComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('squid');
}
