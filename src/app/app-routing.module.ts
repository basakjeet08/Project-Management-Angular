import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// This is the routing for the App Routing Component
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
