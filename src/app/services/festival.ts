import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, JourProgramme, Chant, Repas, Tshirt, Partenaire } from '../models/event.model';

/**
 * Source unique des contenus de l'édition en cours.
 *
 * Horaires, intitulés, groupes, menu et tarifs sont repris tels quels de
 * l'affiche officielle, du flyer et du carrousel Instagram de la Fête de
 * Cieutat 2026. N'y ajouter aucun de ces éléments qui ne figure pas sur ces
 * supports.
 *
 * Seuls les `lieu` font exception : l'affiche ne les imprime pas tous, ils
 * sont repris de l'édition précédente (lieux inchangés, confirmés par le
 * comité).
 */
@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  readonly edition = 2026;
  readonly dates = '28 - 31 août 2026';
  readonly boutiqueUrl =
    'https://www.helloasso.com/associations/comite-des-jeunes-de-cieutat/boutiques/le-t-shirt-cieutatois-2026';

  /** Mot du comité, repris du flyer 2026. */
  readonly motDuComite = [
    `C'est avec beaucoup de plaisir que nous vous retrouvons pour partager ensemble la Fête de la
     Saint-Barthélémy. Comme chaque année, le Comité des Jeunes a mis tout son cœur à préparer ce
     week-end, avec l'envie de vous offrir un moment de convivialité et de bonne humeur.`,
    `Ces festivités nous permettent de nous retrouver entre voisins, amis, famille, mais aussi
     d'accueillir celles et ceux qui viennent découvrir notre beau village.`,
    `Que vous soyez plutôt partie de pétanque, bon repas animé, piste de danse jusqu'au bout de la
     nuit ou chants traditionnels, nous espérons sincèrement que chacun trouvera son bonheur au fil
     de ces quatre jours.`
  ];

  private programme: JourProgramme[] = [
    {
      jour: 'Vendredi',
      date: '28 août 2026',
      libelle: 'Vendredi 28 août',
      events: [
        {
          id: 'ven-1930',
          jour: 'vendredi',
          heure: '19h30',
          titre: 'Concert de chants traditionnels',
          lieu: 'Église de Cieutat',
          icon: 'church',
          artistes: ['Qu\'èm cò qui èm', 'A vista de nas', 'Méteil']
        },
        {
          id: 'ven-2100',
          jour: 'vendredi',
          heure: '21h',
          titre: 'Cantèra',
          description: 'Buvette et assiettes de tapas sur place',
          lieu: 'Salle des fêtes',
          icon: 'local_bar'
        }
      ]
    },
    {
      jour: 'Samedi',
      date: '29 août 2026',
      libelle: 'Samedi 29 août',
      events: [
        {
          id: 'sam-1030',
          jour: 'samedi',
          heure: '10h30',
          titre: 'Jeux d\'enfant',
          lieu: 'Terrain de foot',
          icon: 'sports_soccer'
        },
        {
          id: 'sam-1430',
          jour: 'samedi',
          heure: '14h30',
          titre: 'Concours de pétanque en doublette',
          description: 'Sans engagement',
          lieu: 'Salle des fêtes',
          icon: 'sports_baseball'
        },
        {
          id: 'sam-1830',
          jour: 'samedi',
          heure: '18h30',
          titre: 'Messe patronale',
          lieu: 'Église de Cieutat',
          icon: 'church'
        },
        {
          id: 'sam-1930',
          jour: 'samedi',
          heure: '19h30',
          titre: 'Apéritif et repas animé',
          description: 'Places limitées — réservation nécessaire',
          lieu: 'Salle des fêtes',
          icon: 'restaurant',
          artistes: ['Los Bambolayres']
        },
        {
          id: 'sam-0000',
          jour: 'samedi',
          heure: '00h - 4h',
          titre: 'Bal',
          description: 'Entrée gratuite',
          lieu: 'Salle des fêtes',
          icon: 'music_note',
          artistes: ['Podium SystemeD']
        }
      ]
    },
    {
      jour: 'Dimanche',
      date: '30 août 2026',
      libelle: 'Dimanche 30 août',
      events: [
        {
          id: 'dim-1200',
          jour: 'dimanche',
          heure: '12h',
          titre: 'Dépôt de gerbes',
          lieu: 'Monument aux morts',
          icon: 'military_tech'
        },
        {
          id: 'dim-1230',
          jour: 'dimanche',
          heure: '12h30',
          titre: 'Apéritif',
          lieu: 'Place du village',
          icon: 'local_bar'
        },
        {
          id: 'dim-1300',
          jour: 'dimanche',
          heure: '13h',
          titre: 'Départ des aubades',
          description: 'Inscription au 06.10.53.28.83',
          lieu: 'Place du village',
          icon: 'groups'
        },
        {
          id: 'dim-1900',
          jour: 'dimanche',
          heure: '19h',
          titre: 'Apéritif animé',
          description: 'Restauration par le food truck « O\'truck »',
          lieu: 'Salle des fêtes',
          icon: 'local_bar',
          artistes: ['Oyana']
        },
        {
          id: 'dim-2100',
          jour: 'dimanche',
          heure: '21h',
          titre: 'Concert',
          lieu: 'Salle des fêtes',
          icon: 'music_note',
          artistes: ['Welcome Trio']
        }
      ]
    },
    {
      jour: 'Lundi',
      date: '31 août 2026',
      libelle: 'Lundi 31 août',
      events: [
        {
          id: 'lun-1200',
          jour: 'lundi',
          heure: '12h',
          titre: 'Apéritif',
          lieu: 'Salle des fêtes',
          icon: 'local_bar'
        },
        {
          id: 'lun-1430',
          jour: 'lundi',
          heure: '14h30',
          titre: 'Concours de pétanque en doublette',
          description: 'Sans engagement',
          lieu: 'Salle des fêtes',
          icon: 'sports_baseball'
        },
        {
          id: 'lun-1900',
          jour: 'lundi',
          heure: '19h',
          titre: 'Apéritif',
          lieu: 'Salle des fêtes',
          icon: 'local_bar'
        },
        {
          id: 'lun-2300',
          jour: 'lundi',
          heure: '23h',
          titre: 'Bal',
          description: 'Entrée gratuite',
          lieu: 'Salle des fêtes',
          icon: 'music_note',
          artistes: ['Podium La Bomba']
        }
      ]
    }
  ];

  private repas: Repas = {
    quand: 'Samedi 29 août à 19h30',
    anime: 'Los Bambolayres',
    note: 'Places limitées',
    formules: [
      {
        nom: 'Adultes',
        prix: '15 €',
        plats: [
          'Entrée : jambon melon',
          'Plat : porc mariné avec pommes de terre champêtre',
          'Dessert'
        ]
      },
      {
        nom: 'Enfants',
        precision: 'moins de 12 ans',
        prix: '8 €',
        plats: ['Entrée : jambon melon', 'Plat : saucisse avec frites', 'Dessert']
      }
    ],
    dateLimite: 'Réservations jusqu\'au 25/08',
    contacts: [
      { nom: 'Damien Payssan', telephone: '07.86.81.07.70', tel: '+33786810770' },
      { nom: 'Lauriane Bègue', telephone: '06.87.31.42.11', tel: '+33687314211' }
    ]
  };

  private tshirt: Tshirt = {
    visuelUrl: '/assets/images/tshirts/tshirt-2026.png',
    prixAdulte: '20 €',
    prixEnfant: '15 €',
    dateLimite: 'À commander avant le dimanche 23 août',
    boutiqueUrl: this.boutiqueUrl,
    retrait:
      'T-shirt à récupérer le dimanche de la fête à l\'apéritif du maire le midi (nous prévenir en cas d\'absence pour organiser le retrait à un autre moment).'
  };

  private chants: Chant[] = [
    {
      id: '1',
      titre: 'Cahier de chants de la fête de Cieutat',
      livretUrl: '/assets/livrets/Cahier-chant-fête-cieutat-Gaël-PAYSSAN.pdf',
      description: 'Recueil des chants'
    }
  ];


  /**
   * Sponsors de l'édition 2026, relevés sur l'encart « Merci infiniment pour le
   * soutien de tous nos sponsors » du flyer. Seules les coordonnées lisibles
   * sans ambiguïté sur l'encart sont reprises ici.
   */
  private partenaires: Partenaire[] = [
    {
      nom: 'Puertolas Vivien',
      activites: [
        'Charpente, couverture, zinguerie',
        'Bardage, solivage, pose châssis de toit',
        'Terrasse — neuf et rénovation'
      ],
      telephone: '06 84 46 01 23',
      tel: '+33684460123',
      email: 'vivien.puertolas@orange.fr'
    },
    {
      nom: 'ETA Dandrau',
      activites: [
        'Travaux de fenaison, travaux des champs',
        'Épandage fumier',
        'Achat / vente fourrage & paille'
      ]
    },
    {
      nom: 'EARL Larredou',
      activites: [
        'Élevage porc noir de Bigorre, brebis castillonnaise',
        'Vente les vendredis de 16h à 19h'
      ],
      adresse: '31 chemin Era Poutja, Cieutat',
      telephone: '06 23 49 07 07',
      tel: '+33623490707'
    },
    {
      nom: 'EGDL — Darré Lionel',
      activites: ['Électricité générale']
    },
    {
      nom: 'TotalEnergies — Pecassou Paul',
      activites: ['Station service', 'Lavage 24h/24', 'Pneumatique'],
      adresse: '14 avenue de Tarbes, 65190 Tournay',
      telephone: '05 62 35 71 97',
      tel: '+33562357197'
    },
    {
      nom: 'Darré Terrassement',
      activites: ['Assainissement', 'Empierrage', 'Débroussaillage'],
      adresse: '65200 Cieutat',
      telephone: '06 71 81 88 41',
      tel: '+33671818841',
      email: 'sarl.darre@orange.fr'
    },
    {
      nom: 'Thomas Barrere',
      activites: ['Élagages', 'Abattages', 'Espaces verts'],
      telephone: '06 01 01 56 50',
      tel: '+33601015650'
    },
    {
      nom: 'E.T.A Cédric Darré',
      activites: ['Travaux de fauchage / débroussaillage', 'Travaux agricoles'],
      telephone: '06 88 70 11 63',
      tel: '+33688701163',
      email: 'ced.darre@orange.fr'
    },
    {
      nom: 'Les Menuisiers Bagnerais',
      activites: [
        'Aluminium, bois, PVC',
        'Fenêtres, portes, volets, portes de garage',
        'Portails, stores, pergolas'
      ],
      adresse: '23 avenue du Général Leclerc, 65200 Bagnères-de-Bigorre',
      telephone: '05 62 95 33 39',
      tel: '+33562953339'
    },
    {
      // Coordonnées illisibles sur l'encart (masquées par un filigrane) :
      // ne rien inscrire tant que le comité ne les a pas confirmées.
      nom: 'Sébastien Espaces Verts et Élagages',
      activites: ['Entretien', 'Tailles et créations', 'Élagages', 'Conseils']
    }
  ];

  getPartenaires(): Observable<Partenaire[]> {
    return of(this.partenaires);
  }

  getProgramme(): Observable<JourProgramme[]> {
    return of(this.programme);
  }

  getChants(): Observable<Chant[]> {
    return of(this.chants);
  }

  getRepas(): Observable<Repas> {
    return of(this.repas);
  }

  getTshirt(): Observable<Tshirt> {
    return of(this.tshirt);
  }

  getEventsByDay(jour: string): Observable<Event[]> {
    const jourProgramme = this.programme.find(j => j.jour.toLowerCase() === jour.toLowerCase());
    return of(jourProgramme ? jourProgramme.events : []);
  }
}
