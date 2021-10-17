import { Component, OnInit } from '@angular/core';
import { UserData } from '../../providers/user-data';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {

  loggedIn = false;
  dark = false;
  role: string;

  constructor(
    private storage: Storage,
    private userData: UserData,
    public router: Router
  ) {  }

  ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
    this.checkRole();

  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
      this.checkRole();
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  checkRole() {

      this.storage.get("User").then(user => {
        if(user) {
          this.role = user.role;
        }
      });

  }

  logout() {
      this.userData.logout().then(() => {
        this.storage.remove("User");
        return this.router.navigateByUrl('/login');
      });
  }

}
