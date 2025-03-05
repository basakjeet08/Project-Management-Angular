import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Injecting the required dependencies
  constructor(private authService: AuthService, private router: Router) {}

  // This function is invoked when the user clicks on the logout button
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
