import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { FestivalService } from '../services/festival';
import { JourProgramme } from '../models/event.model';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  programme: JourProgramme[] = [];
  helloAssoUrl = 'https://www.helloasso.com/associations/comite-des-jeunes-de-cieutat/boutiques/tee-shirt-cieutatois';

  constructor(private festivalService: FestivalService) {}

  ngOnInit() {
    this.festivalService.getProgramme().subscribe(programme => {
      this.programme = programme;
    });
  }
}
