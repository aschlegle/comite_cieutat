import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestivalService } from '../services/festival';
import { Partenaire } from '../models/event.model';

@Component({
  selector: 'app-partenaires',
  imports: [CommonModule],
  templateUrl: './partenaires.html',
  styleUrl: './partenaires.scss'
})
export class PartenairesComponent implements OnInit {
  partenaires: Partenaire[] = [];

  readonly edition: number;

  constructor(private festivalService: FestivalService) {
    this.edition = festivalService.edition;
  }

  ngOnInit() {
    this.festivalService.getPartenaires().subscribe(p => (this.partenaires = p));
  }
}
