import { Component } from '@angular/core';
import { FestivalService } from '../services/festival';

@Component({
  selector: 'app-partenaires',
  imports: [],
  templateUrl: './partenaires.html',
  styleUrl: './partenaires.scss'
})
export class PartenairesComponent {
  readonly edition: number;

  constructor(festivalService: FestivalService) {
    this.edition = festivalService.edition;
  }
}
