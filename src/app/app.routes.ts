import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import('@Pages/welcome/welcome.component').then(m => m.WelcomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('@Pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'studies',
        loadComponent: () => import('@Pages/studies/studies.component').then(m => m.StudiesComponent)
    },
    {
        path: 'jobs',
        loadComponent: () => import('@Pages/jobs/jobs.component').then(m => m.JobsComponent)
    },
    {
        path: 'skills',
        loadComponent: () => import('@Pages/skills/skills.component').then(m => m.SkillsComponent)
    },
];
