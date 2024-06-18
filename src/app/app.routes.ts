import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alfa',
    loadComponent: () => import('./routes/alfa/alfa.page'),
  },
  {
    path: 'beta',
    loadComponent: () => import('./routes/beta/beta.page'),
  },
];

export const REMOTE_ROUTES: Routes = [
  {
    path: 'alfa',
    loadComponent: () => import('./routes/alfa/alfa.page'),
  },
  {
    path: 'beta',
    loadComponent: () => import('./routes/beta/beta.page'),
  },
];
