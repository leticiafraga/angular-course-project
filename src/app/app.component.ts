import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';

  toggleView = true;

  onNavigate(option: string){

    if (option ==="recipe") {
      this.toggleView = true;
    }
    else {
      this.toggleView = false;
    }
    console.log(this.toggleView);

  }
}
