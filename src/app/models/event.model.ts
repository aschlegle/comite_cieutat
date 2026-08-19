export interface Event {
  id: string;
  jour: 'vendredi' | 'samedi' | 'dimanche' | 'lundi';
  heure: string;
  titre: string;
  /** Uniquement ce qui figure sur l'affiche officielle. */
  description?: string;
  /** Absent quand l'affiche ne précise pas le lieu. */
  lieu?: string;
  icon?: string;
  /** Groupes / podiums annoncés pour cet événement. */
  artistes?: string[];
}

export interface JourProgramme {
  jour: string;
  date: string;
  /** Intitulé affiché en titre de journée, ex. « Vendredi 28 août ». */
  libelle: string;
  events: Event[];
}

export interface Chant {
  id: string;
  titre: string;
  livretUrl: string;
  description?: string;
}

export interface MenuFormule {
  nom: string;
  precision?: string;
  prix: string;
  plats: string[];
}

export interface Contact {
  nom: string;
  /** Format d'affichage repris de l'affiche. */
  telephone: string;
  /** Même numéro au format international, pour les liens tel:. */
  tel: string;
}

export interface Repas {
  quand: string;
  anime: string;
  note: string;
  formules: MenuFormule[];
  dateLimite: string;
  contacts: Contact[];
}

export interface Tshirt {
  visuelUrl: string;
  prixAdulte: string;
  prixEnfant: string;
  dateLimite: string;
  boutiqueUrl: string;
  retrait: string;
}

export interface Partenaire {
  nom: string;
  /** Activités telles qu'annoncées sur l'encart du flyer. */
  activites: string[];
  adresse?: string;
  /** Format d'affichage repris de l'encart. */
  telephone?: string;
  /** Même numéro au format international, pour les liens tel:. */
  tel?: string;
  email?: string;
}
