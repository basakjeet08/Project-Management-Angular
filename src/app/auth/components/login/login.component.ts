import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router: Router, private route: ActivatedRoute) {}

  // This function is invoked when the user clicks on the submit Buttonm
  onSubmitClick() {
    console.log(this.userInput);
  }

  // This function is invoked when the user clicks on the go to register Button
  goToRegisterPageClick() {
    this.router.navigate(['../', 'register'], { relativeTo: this.route });
  }
}
