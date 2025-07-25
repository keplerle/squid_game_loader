import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLOBAL_LOADER } from '../base/loader.token';
import { LoaderBaseService } from '../base/loader-base.service';

@Component({
  selector: 'lib-squid-game-loader',
  imports: [CommonModule],
  templateUrl: './squid-game-loader.html',
  styleUrls: ['./squid-game-loader.scss']
})
export class SquidGameLoader {
  constructor(@Inject(GLOBAL_LOADER) public loaderService: LoaderBaseService) { }
}
