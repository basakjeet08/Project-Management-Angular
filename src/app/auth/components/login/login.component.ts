import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // This variable is the data input from the user
  userInput = {
    username: '',
    password: '',
  };

  // This error message is used to show errors coming from the Api Calls
  errorMessage: string | null = null;

  // Injecting the needed dependecies in the constructor
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // This function is invoked when the user clicks on the submit Buttonm
  onSubmitClick() {
    const isSuccess = this.authService.loginUser(
      this.userInput.username,
      this.userInput.password
    );

    // Redirecting to the home route
    if (isSuccess) {
      this.router.navigate(['../../', 'home'], { relativeTo: this.route });
    }
  }

  // This function is invoked when the user clicks on the go to register Button
  goToRegisterPageClick() {
    this.router.navigate(['../', 'register'], { relativeTo: this.route });
  }
}
