import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOptions } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-mairie',
  templateUrl: './home-mairie.page.html',
  styleUrls: ['./home-mairie.page.scss'],
})
export class HomeMairiePage implements OnInit {

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
  
  goToSignup() {
    this.router.navigateByUrl('/app/tabs/signup');
  }



  goToChat() {
    
  }

}
