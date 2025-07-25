import { Component, signal } from '@angular/core';
import { TestHttpComponent } from '../test-http/test-http';
import { SquidGameLoader } from '../../projects/squid-game-loader/src/lib/global/squid-game-loader';

@Component({
  selector: 'app-root',
  imports: [SquidGameLoader, TestHttpComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('squid');
}
