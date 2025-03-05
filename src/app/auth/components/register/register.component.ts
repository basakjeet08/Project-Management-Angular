import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    password: '',
  };

  // This variable contains the error message for the api calls and the form input
  errorMessage: string | null = null;

  // Injecting the necessary things through the constructor
  constructor(private router: Router, private route: ActivatedRoute) {}

  // This function is invoked when the user clicks on the submit Button
  onSubmitClick() {
    console.log(this.userInput);
  }

  // This function takes you to the login page
  onGoToLoginPageClick() {
    this.router.navigate(['../', 'login'], { relativeTo: this.route });
  }
}
