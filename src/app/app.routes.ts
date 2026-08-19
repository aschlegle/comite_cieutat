import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProgrammeComponent } from './programme/programme';
import { ChantsComponent } from './chants/chants';
import { GalerieComponent } from './galerie/galerie';
import { PartenairesComponent } from './partenaires/partenaires';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'chants', component: ChantsComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: '**', redirectTo: '' }
];
