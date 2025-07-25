import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader.service';

@Component({
  selector: 'lib-squid-game-loader',
  imports: [CommonModule],
  templateUrl: './squid-game-loader.html',
  styleUrls: ['./squid-game-loader.scss']
})
export class SquidGameLoader {
  constructor(public loaderService: LoaderService) { }
}
