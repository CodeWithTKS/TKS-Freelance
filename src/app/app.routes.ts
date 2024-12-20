import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
        // redirectTo: 'project', pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent
        // redirectTo: 'project', pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
        // redirectTo: 'project', pathMatch: 'full'
    },
    {
        path: 'service',
        component: ServiceComponent
        // redirectTo: 'project', pathMatch: 'full'
    },
    {
        path: 'project',
        loadChildren: () => import('./components/projects/projects-routing.module').then(m => m.ProjectsRoutingModule)
    },
    {
        path: '**', // wildcard route to catch any unmatched routes
        component: NotFoundComponent
    }
];
