import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-galerie',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './galerie.html',
  styleUrl: './galerie.scss'
})
export class GalerieComponent {
  allImages = [
    {
      src: '/assets/images/events/2025.png',
      title: 'Fêtes 2025',
      description: 'Programme officiel des fêtes de la Saint-Barthélémy 2025'
    },
    {
      src: '/assets/images/events/2024.png',
      title: 'Fêtes 2024',
      description: 'Affiche des fêtes de la Saint-Barthélémy 2024'
    },
    {
      src: '/assets/images/events/2023.png',
      title: 'Fêtes 2023',
      description: 'Affiche des fêtes de la Saint-Barthélémy 2023'
    },
    {
      src: '/assets/images/events/Concert 2023.png',
      title: 'Concert 2023',
      description: 'Affiche du concert polyphonique 2023'
    },
    {
      src: '/assets/images/events/Concert 2022.jpg',
      title: 'Concert 2022',
      description: 'Affiche du concert polyphonique 2022'
    },
    {
      src: '/assets/images/events/Concert 2019.jpg',
      title: 'Concert 2019',
      description: 'Affiche du concert polyphonique 2019'
    },
    {
      src: '/assets/images/events/Concert 2018.jpg',
      title: 'Concert 2018',
      description: 'Affiche du concert polyphonique 2018'
    }
  ];
  
  // Nombre d'images à afficher initialement
  initialImagesCount = 3;
  
  // Images actuellement affichées
  displayedImages: any[] = [];
  
  // Flag pour afficher ou masquer le bouton "Voir plus"
  hasMoreImages = true;
  
  constructor() {
    // Afficher les premières images au chargement
    this.loadInitialImages();
  }
  
  loadInitialImages() {
    this.displayedImages = this.allImages.slice(0, this.initialImagesCount);
    this.checkIfMoreImages();
  }
  
  loadMoreImages() {
    const currentLength = this.displayedImages.length;
    const nextImages = this.allImages.slice(currentLength, currentLength + 3);
    this.displayedImages = [...this.displayedImages, ...nextImages];
    this.checkIfMoreImages();
  }
  
  checkIfMoreImages() {
    this.hasMoreImages = this.displayedImages.length < this.allImages.length;
  }
}
