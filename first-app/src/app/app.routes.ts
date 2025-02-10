import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses.component').then((m) => m.CoursesComponent),

  },
];
