import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOptions } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-assos',
  templateUrl: './home-assos.page.html',
  styleUrls: ['./home-assos.page.scss'],
})
export class HomeAssosPage implements OnInit {
  user: UserOptions;

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
  
  goToScan() {
    this.router.navigateByUrl('/app/tabs/basket-scan')
  }

  goToBasketCreation() {
    this.router.navigateByUrl('/app/tabs/basket-creation');
  }

}
