import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage implements OnInit {

  user: UserOptions;

  constructor(private storage: Storage,
    public router: Router,
    public userData: UserData,
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner) {}

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
    this.http.get("assets/data/users-data.json").subscribe((data: any) => {
      this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, data.basketRight);
    });
    // this.router.navigateByUrl('/app/tabs/basket-qr');
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
