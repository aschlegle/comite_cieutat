import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FestivalService } from '../services/festival';
import { Chant } from '../models/event.model';

@Component({
  selector: 'app-chants',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './chants.html',
  styleUrl: './chants.scss'
})
export class ChantsComponent implements OnInit {
  chants: Chant[] = [];

  /** Groupes annoncés sur l'affiche du concert du vendredi. */
  readonly groupes = ['Qu\'èm cò qui èm', 'A vista de nas', 'Méteil'];

  constructor(private festivalService: FestivalService) {}

  ngOnInit() {
    this.festivalService.getChants().subscribe(chants => {
      this.chants = chants;
    });
  }
}
