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

  /** Deux décors par journée, dans l'ordre du programme. */
  readonly decors = [
    ['/assets/decor/verres.png', '/assets/decor/boule-disco.svg'],
    ['/assets/decor/ballons.svg', '/assets/decor/boule-disco.svg'],
    ['/assets/decor/etoile-mer.svg', '/assets/decor/etincelles.svg'],
    ['/assets/decor/chapeaux.svg', '/assets/decor/coquillage.svg']
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
