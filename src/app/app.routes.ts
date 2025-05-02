import { Routes } from '@angular/router';

export const rootroutes = {
  HOME: '',
  EXPERIENCE: 'experience',
  NOTFOUND: '404'
};

export const routes: Routes = [
  {
    path: rootroutes.HOME,
    loadComponent: () =>
      import('./pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: rootroutes.EXPERIENCE,
    loadComponent: () =>
      import('./pages/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: rootroutes.NOTFOUND,
    loadComponent: () =>
      import('./pages/not-found.component').then(m => m.NotFoundComponent)
  },
  { path: '**', redirectTo: `/${rootroutes.NOTFOUND}` }
];
