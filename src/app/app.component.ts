import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'course-project';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.autoLogin();
  }

  // toggleView = true;

  // onNavigate(option: string){

  //   if (option ==="recipe") {
  //     this.toggleView = true;
  //   }
  //   else {
  //     this.toggleView = false;
  //   }
  //   console.log(this.toggleView);
  // }
}
