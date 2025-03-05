import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';

const projectsRoutes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, RouterModule.forChild(projectsRoutes)],
})
export class ProjectsModule {}
