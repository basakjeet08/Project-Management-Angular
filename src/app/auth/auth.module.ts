import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

// These are the routes for the auth module
const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(authRoutes), FormsModule],
})
export class AuthModule {}
