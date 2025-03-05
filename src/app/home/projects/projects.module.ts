import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';

// These are the routes for the project Module
const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'add', component: AddComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [ProjectsComponent, AddComponent, DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(projectsRoutes), FormsModule],
})
export class ProjectsModule {}
