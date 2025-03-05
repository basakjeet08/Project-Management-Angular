import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  // This variable denotes the user inputs
  userInput = {
    name: '',
    scale: '',
    description: '',
  };

  // Injecting the necessary dependencies
  constructor(private router: Router, private route: ActivatedRoute) {}

  // This function is invoked when the user clicks on the submit button
  onSubmitClick() {
    console.log(this.userInput);
  }

  // This function is invoked when the user clicks on the cancel button
  onCancelClick() {
    this.router.navigate(['../', 'details'], { relativeTo: this.route });
  }
}
