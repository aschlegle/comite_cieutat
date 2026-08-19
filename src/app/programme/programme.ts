import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestivalService } from '../services/festival';
import { JourProgramme, Repas } from '../models/event.model';

@Component({
  selector: 'app-programme',
  imports: [CommonModule],
  templateUrl: './programme.html',
  styleUrl: './programme.scss'
})
export class ProgrammeComponent implements OnInit {
  programme: JourProgramme[] = [];
  repas?: Repas;

  readonly dates: string;
  readonly edition: number;

  /**
   * Un seul décor par journée, dans l'ordre du programme, et tous différents :
   * la page enchaîne assez de blocs pour que davantage devienne redondant.
   */
  readonly decors = [
    '/assets/decor/coquillage.svg',
    '/assets/decor/boule-disco.svg',
    '/assets/decor/etoile-mer.svg',
    '/assets/decor/ballons.svg'
  ];

  constructor(private festivalService: FestivalService) {
    this.dates = festivalService.dates;
    this.edition = festivalService.edition;
  }

  ngOnInit() {
    this.festivalService.getProgramme().subscribe(programme => (this.programme = programme));
    this.festivalService.getRepas().subscribe(repas => (this.repas = repas));
  }
}
