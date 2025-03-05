import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // This is the variable which stores the user input data
  userInput = {
    firstname: '',
    lastname: '',
    username: '',
    userType: 'Developer',
    password: '',
  };

  // This variable contains the error message for the api calls and the form input
  errorMessage: string | null = null;

  // Injecting the necessary things through the constructor
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // This function is invoked when the user clicks on the submit Button
  onSubmitClick() {
    this.authService.registerUser(
      (this.userInput.firstname + ' ' + this.userInput.lastname).trim(),
      this.userInput.username,
      this.userInput.password,
      this.userInput.userType
    );

    // Redirecting to the Login Screen
    this.onGoToLoginPageClick();
  }

  // This function takes you to the login page
  onGoToLoginPageClick() {
    this.router.navigate(['../', 'login'], { relativeTo: this.route });
  }
}
