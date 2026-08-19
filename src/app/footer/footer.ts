import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FestivalService } from '../services/festival';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  readonly edition: number;
  readonly dates: string;
  readonly boutiqueUrl: string;

  constructor(private festivalService: FestivalService) {
    this.edition = festivalService.edition;
    this.dates = festivalService.dates;
    this.boutiqueUrl = festivalService.boutiqueUrl;
  }
}
