import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FestivalService } from '../services/festival';
import { JourProgramme } from '../models/event.model';

@Component({
  selector: 'app-programme',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './programme.html',
  styleUrl: './programme.scss'
})
export class ProgrammeComponent implements OnInit {
  programme: JourProgramme[] = [];
  helloAssoUrl = 'https://www.helloasso.com/associations/comite-des-jeunes-de-cieutat';

  constructor(private festivalService: FestivalService) {}

  ngOnInit() {
    this.festivalService.getProgramme().subscribe(programme => {
      this.programme = programme;
    });
  }
}
