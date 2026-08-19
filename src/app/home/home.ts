import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FestivalService } from '../services/festival';
import { JourProgramme, Repas, Tshirt } from '../models/event.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  programme: JourProgramme[] = [];
  repas?: Repas;
  tshirt?: Tshirt;

  readonly dates: string;
  readonly edition: number;
  readonly motDuComite: string[];

  constructor(private festivalService: FestivalService) {
    this.dates = festivalService.dates;
    this.edition = festivalService.edition;
    this.motDuComite = festivalService.motDuComite;
  }

  ngOnInit() {
    this.festivalService.getProgramme().subscribe(programme => (this.programme = programme));
    this.festivalService.getRepas().subscribe(repas => (this.repas = repas));
    this.festivalService.getTshirt().subscribe(tshirt => (this.tshirt = tshirt));
  }
}
