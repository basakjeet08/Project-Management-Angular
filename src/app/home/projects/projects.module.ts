import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// These are the routes for the project Module
const projectsRoutes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(projectsRoutes), FormsModule],
})
export class ProjectsModule {}
