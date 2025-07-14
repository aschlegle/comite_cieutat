import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Accueil', route: '/', icon: 'home' },
    { label: 'Programme', route: '/programme', icon: 'event' },
    { label: 'Chants', route: '/chants', icon: 'music_note' },
    { label: 'Galerie', route: '/galerie', icon: 'photo_library' }
  ];
}
