import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

export const ProjectsRoutingModule: Routes = [
  { path: '', component: ProjectListComponent, pathMatch: 'full' },
];
