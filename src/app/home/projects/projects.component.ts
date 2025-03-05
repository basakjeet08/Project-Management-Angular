import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  // Injecting the required dependencies
  constructor(private router: Router, private route: ActivatedRoute) {}

  // This function is invoked when the user clicks on the add Project Button
  onAddProjectClick() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
