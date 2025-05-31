import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./componentes/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab1',
    loadComponent: () => import('./componentes/tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./componentes/tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./componentes/tab3/tab3.page').then( m => m.Tab3Page)
  },
];
