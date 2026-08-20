import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface ImageGalerie {
  src: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-galerie',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './galerie.html',
  styleUrl: './galerie.scss'
})
export class GalerieComponent {
  allImages: ImageGalerie[] = [
    {
      src: '/assets/images/events/affiche-2026.jpg',
      title: 'Affiche 2026',
      description: 'Programme officiel de la Saint-Barthélémy 2026'
    },
    {
      src: '/assets/images/events/concert-chants-2026.jpg',
      title: 'Concert de chants 2026',
      description: 'Vendredi 28 août à 19h30 à l\'église de Cieutat'
    },
    {
      src: '/assets/images/tshirts/tshirt-2026.png',
      title: 'T-shirt 2026',
      description: 'La marinière cieutatoise de l\'édition 2026'
    },
    {
      src: '/assets/images/events/flyer-2026-recto.jpg',
      title: 'Flyer 2026 — recto',
      description: 'Mot du comité et sponsors de l\'édition'
    },
    {
      src: '/assets/images/events/flyer-2026-verso.jpg',
      title: 'Flyer 2026 — verso',
      description: 'Le programme des quatre jours'
    },
    {
      src: '/assets/images/sponsors/sponsors-2026.jpg',
      title: 'Nos sponsors 2026',
      description: 'Merci infiniment pour le soutien de tous nos sponsors'
    },
    {
      src: '/assets/images/events/2025.png',
      title: 'Fête 2025',
      description: 'Affiche des fêtes de la Saint-Barthélémy 2025'
    },
    {
      src: '/assets/images/events/2024.png',
      title: 'Fête 2024',
      description: 'Affiche des fêtes de la Saint-Barthélémy 2024'
    },
    {
      src: '/assets/images/events/2023.png',
      title: 'Fête 2023',
      description: 'Affiche des fêtes de la Saint-Barthélémy 2023'
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

  /** Nombre d'images affichées au chargement, puis à chaque « voir plus ». */
  private readonly pas = 6;

  displayedImages: ImageGalerie[] = [];
  hasMoreImages = true;

  constructor() {
    this.displayedImages = this.allImages.slice(0, this.pas);
    this.checkIfMoreImages();
  }

  loadMoreImages() {
    this.displayedImages = this.allImages.slice(0, this.displayedImages.length + this.pas);
    this.checkIfMoreImages();
  }

  private checkIfMoreImages() {
    this.hasMoreImages = this.displayedImages.length < this.allImages.length;
  }
}
