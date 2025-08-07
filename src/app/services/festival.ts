import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, JourProgramme, Chant } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  private programme: JourProgramme[] = [
    {
      jour: 'Vendredi',
      date: '22 août 2025',
      events: [
        {
          id: '1',
          jour: 'vendredi',
          heure: '19h30',
          titre: 'Concert de chants traditionnels',
          description: 'Concert de chants traditionnels à l\'église de Cieutat',
          lieu: 'Église de Cieutat',
          icon: 'church'
        },
        {
          id: '2',
          jour: 'vendredi',
          heure: '21h00',
          titre: 'Cantéra',
          description: 'Assiettes tapas et buvette sur place',
          lieu: 'Salle des fêtes',
          icon: 'restaurant'
        }
      ]
    },
    {
      jour: 'Samedi',
      date: '23 août 2025',
      events: [
        {
          id: '3',
          jour: 'samedi',
          heure: '10h30',
          titre: 'Parcours/Jeux des enfants',
          description: 'Activités et jeux pour les enfants au terrain de foot',
          lieu: 'Terrain de foot',
          icon: 'child_care'
        },
        {
          id: '4',
          jour: 'samedi',
          heure: '19h00',
          titre: 'Apéritif et repas animé',
          description: 'Animé par LOS BAMBOLAYRES - Réservation Obligatoire',
          lieu: 'Salle des fêtes',
          icon: 'restaurant'
        },
        {
          id: '5',
          jour: 'samedi',
          heure: '23h00',
          titre: 'Bal avec podium Caiman',
          description: 'Soirée dansante avec Fiesta Latina 99',
          lieu: 'Salle des fêtes',
          icon: 'music_note'
        }
      ]
    },
    {
      jour: 'Dimanche',
      date: '24 août 2025',
      events: [
        {
          id: '6',
          jour: 'dimanche',
          heure: '11h00',
          titre: 'Messe',
          description: 'Messe dominicale',
          lieu: 'Église de Cieutat',
          icon: 'church'
        },
        {
          id: '7',
          jour: 'dimanche',
          heure: '12h00',
          titre: 'Dépôt de gerbes',
          description: 'Cérémonie de dépôt de gerbes',
          lieu: 'Monument aux morts',
          icon: 'military_tech'
        },
        {
          id: '8',
          jour: 'dimanche',
          heure: '12h30',
          titre: 'Apéritif puis départ aubades',
          description: 'Apéritif suivi du départ des aubades',
          lieu: 'Place du village',
          icon: 'groups'
        },
        {
          id: '9',
          jour: 'dimanche',
          heure: '19h00',
          titre: 'Apéritif animé Les Bourlingueurs',
          description: 'Apéritif avec animation musicale et food truck',
          lieu: 'Salle des fêtes',
          icon: 'local_bar'
        },
        {
          id: '10',
          jour: 'dimanche',
          heure: '22h00',
          titre: 'Concert avec Voix sans issue',
          description: 'Concert du groupe "Voix sans issue"',
          lieu: 'Salle des fêtes',
          icon: 'music_note'
        }
      ]
    },
    {
      jour: 'Lundi',
      date: '25 août 2025',
      events: [
        {
          id: '11',
          jour: 'lundi',
          heure: '12h00',
          titre: 'Apéritif',
          description: 'Apéritif de clôture',
          lieu: 'Salle des fêtes',
          icon: 'local_bar'
        },
        {
          id: '12',
          jour: 'lundi',
          heure: '14h30',
          titre: 'Concours de pétanque',
          description: 'Concours de pétanque en doublette',
          lieu: 'Salle des fêtes',
          icon: 'sports_baseball'
        },
        {
          id: '13',
          jour: 'lundi',
          heure: '19h00',
          titre: 'Apéritif',
          description: 'Apéritif de fin de festival',
          lieu: 'Salle des fêtes',
          icon: 'local_bar'
        },
        {
          id: '14',
          jour: 'lundi',
          heure: '23h00',
          titre: 'Bal avec podium La Bomba',
          description: 'Dernier bal de la fête',
          lieu: 'Salle des fêtes',
          icon: 'music_note'
        }
      ]
    }
  ];

  private chants: Chant[] = [
    {
      id: '1',
      titre: 'Cahier de chants de la fête de Cieutat',
      livretUrl: '/assets/livrets/Cahier-chant-fête-cieutat-Gaël-PAYSSAN.pdf',
      description: 'Recueil des chants'
    }
  ];

  constructor() { }

  getProgramme(): Observable<JourProgramme[]> {
    return of(this.programme);
  }

  getChants(): Observable<Chant[]> {
    return of(this.chants);
  }

  getEventsByDay(jour: string): Observable<Event[]> {
    const jourProgramme = this.programme.find(j => j.jour.toLowerCase() === jour.toLowerCase());
    return of(jourProgramme ? jourProgramme.events : []);
  }
}