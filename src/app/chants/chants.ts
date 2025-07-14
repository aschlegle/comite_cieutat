import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FestivalService } from '../services/festival';
import { Chant } from '../models/event.model';

@Component({
  selector: 'app-chants',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './chants.html',
  styleUrl: './chants.scss'
})
export class ChantsComponent implements OnInit {
  chants: Chant[] = [];

  constructor(private festivalService: FestivalService) {}

  ngOnInit() {
    this.festivalService.getChants().subscribe(chants => {
      this.chants = chants;
    });
  }
}
