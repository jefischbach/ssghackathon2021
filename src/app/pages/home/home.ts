import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage implements OnInit {

  user: any;

  constructor(private storage: Storage,
    public router: Router,
    public userData: UserData) {}

  ngOnInit() {
    this.userData.isLoggedIn().then(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigateByUrl('/login');
      }
    })
    this.storage.get("User").then(value => {
      this.user = value;
      console.log(this.user)
    });
  }
  
  goToQr() {
    this.router.navigateByUrl('/app/tabs/basket-qr');
  }

  goToMap() {
    this.router.navigateByUrl('/app/tabs/map');
  }

  goToFiles() {
    this.router.navigateByUrl('/app/tabs/filesafe');
  }

  goToChat() {

  }
}
