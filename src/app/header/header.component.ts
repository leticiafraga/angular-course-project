import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSub: Subscription;

  isAuth = false;
  collapsed = true;

  constructor(private dss: DataStorageService, private auth: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.auth.user.subscribe(user => {
      this.isAuth = !user ? false : true;
    });
  }

  saveData() {
    this.dss.storeRecipes();
  }

  fetchData() {
    this.dss.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout() {
    this.auth.logout();
  }

}
