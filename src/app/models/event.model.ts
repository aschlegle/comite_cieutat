export interface Event {
  id: string;
  jour: 'vendredi' | 'samedi' | 'dimanche' | 'lundi';
  heure: string;
  titre: string;
  description: string;
  lieu: string;
  icon?: string;
}

export interface JourProgramme {
  jour: string;
  date: string;
  events: Event[];
}

export interface Chant {
  id: string;
  titre: string;
  livretUrl: string;
  description?: string;
}